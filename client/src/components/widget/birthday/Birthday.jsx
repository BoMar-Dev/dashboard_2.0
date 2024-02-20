import React, { useEffect, useState } from "react";
import { format, differenceInDays } from "date-fns";
import bgBirthday from "../../../assets/bg-birthday.jfif";

export default function Birthday() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    const fetchBirthdaysApi = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/birthdays");
        const data = await response.json();
        setBirthdays(data);
        console.log("This is CGI birthdays", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBirthdaysApi();
  }, []);

  const getNextBirthday = () => {
    const sortedBirthdays = birthdays
      .map((birthday) => {
        const thisYearBirthday = new Date(
          currentDate.getFullYear(),
          birthday.month - 1,
          birthday.day + 1
        );
        const daysUntilBirthday = differenceInDays(
          thisYearBirthday,
          currentDate
        );
        return {
          ...birthday,
          daysUntilBirthday,
          birthdayDate: thisYearBirthday,
        };
      })
      .sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday);

    return sortedBirthdays.find(
      (birthday) => birthday.daysUntilBirthday >= -15
    );
  };

  const nextBirthday = getNextBirthday();

  return (
    <div>
      <div
        className="relative w-[382px] h-[270px] bg-cover bg-center bg-no-repeat rounded-[20px] mt-2"
        style={{ backgroundImage: `url(${bgBirthday})` }}
      >
        {/* Conditional rendering for displaying countdown, "GRATTIS", or "Ingen födelsedag de kommande 15 dagarna" */}
        {nextBirthday && (
          <div>
            {/* Display countdown or "GRATTIS" */}
            {nextBirthday.daysUntilBirthday > 0 ? (
              <p className="days absolute bottom-7 left-10 text-neutral-50 text-[120px] font-semibold font-['Inter']">
                {nextBirthday.daysUntilBirthday}
              </p>
            ) : nextBirthday.daysUntilBirthday === 0 ? (
              <p className="days absolute bottom-7 left-10 text-neutral-50 text-[120px] font-semibold font-['Inter']">
                <span style={{ fontSize: "70px" }}>GRATTIS</span>
              </p>
            ) : (
              nextBirthday.daysUntilBirthday > 15 && (
                // Display "Ingen födelsedag de kommande 15 dagarna" if next birthday is more than 15 days away
                <p className="days absolute bottom-7 left-10 text-neutral-50 text-[120px] font-semibold font-['Inter']">
                  Ingen födelsedag de kommande 15 dagarna
                </p>
              )
            )}

            {/* Display the name with or without "födelsedag" based on the days until the next birthday */}
            <p className="namn absolute bottom-4 left-10 text-xl font-bold text-white">
              {nextBirthday.daysUntilBirthday > 0 && (
                <>
                  dagar kvar till
                  <br />
                </>
              )}
              {nextBirthday.name}
              {nextBirthday.daysUntilBirthday !== 0 && <> födelsedag</>}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

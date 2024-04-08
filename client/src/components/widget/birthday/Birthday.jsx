import React, { useEffect, useState } from "react";
import { differenceInDays } from "date-fns";
import bgBirthday from "../../../assets/bg-birthday.jfif";

// API function
import { fetchBirthdaysApi } from "../../../functions/API/birthdayAPI";

export default function Birthday() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    fetchBirthdaysApi(setBirthdays);
  }, []);

  const getNextBirthday = () => {
    const sortedBirthdays = birthdays
      .map((birthday) => {
        const thisYearBirthday = new Date(currentDate.getFullYear(), birthday.month - 1, birthday.day + 1);
        const daysUntilBirthday = differenceInDays(thisYearBirthday, currentDate);
        return {
          ...birthday,
          daysUntilBirthday,
          birthdayDate: thisYearBirthday,
        };
      })
      .filter((birthday) => {
        //  birthdays that are after or equal to the current date
        return birthday.birthdayDate >= currentDate;
      })

      // This sorting ensures that the birthdays with fewer days until the birthday come first in the array, followed by those with more days until the birthday.
      // This way, the array will be sorted in ascending order based on the number of days until each birthday.
      .sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday);

    // Check if there are any upcoming birthdays
    if (sortedBirthdays.length > 0) {
      // If there are upcoming birthdays, return the first one
      return sortedBirthdays[0];
    } else {
      // If there are no upcoming birthdays within the next day, return null
    }
  };

  const nextBirthday = getNextBirthday();

  return (
    <div>
      <div className="relative w-[382px] h-[270px] bg-cover bg-center bg-no-repeat rounded-[20px] mt-2" style={{ backgroundImage: `url(${bgBirthday})` }}>
        {nextBirthday && (
          <div>
            {/* Display countdown or "GRATTIS" */}
            {nextBirthday.daysUntilBirthday > 0 ? (
              <p className="days absolute bottom-7 left-10 text-neutral-50 text-[120px] font-semibold font-['Inter']">{nextBirthday.daysUntilBirthday}</p>
            ) : nextBirthday.daysUntilBirthday === 0 ? (
              <p className="days absolute bottom-7 left-10 text-neutral-50 text-[120px] font-semibold font-['Inter']">
                <span style={{ fontSize: "70px" }}>GRATTIS</span>
              </p>
            ) : (
              nextBirthday.daysUntilBirthday > 15 && (
                // Display "Ingen födelsedag de kommande 15 dagarna" if next birthday is more than 15 days away
                <p className="days absolute bottom-7 left-10 text-neutral-50 text-[120px] font-semibold font-['Inter']">Ingen födelsedag de kommande 15 dagarna</p>
              )
            )}

            {/* Display the name with or without "födelsedag" based on thelpers days until the next birthday */}
            <p className="namn absolute bottom-4 left-10 text-xl font-bold text-white">
              {nextBirthday.daysUntilBirthday > 1 && (
                <>
                  dagar kvar till
                  <br />
                </>
              )}
              {nextBirthday.daysUntilBirthday === 1 && (
                <>
                  dag kvar till
                  <br />
                </>
              )}
              {nextBirthday.name.endsWith("s") ? <>{nextBirthday.name}</> : <>{nextBirthday.name + "s"}</>}
              {nextBirthday.daysUntilBirthday !== 0 && <> födelsedag</>}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

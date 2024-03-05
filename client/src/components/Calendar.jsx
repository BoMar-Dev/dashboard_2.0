import React, { useState } from "react";
import { styles } from "../styles";
import { format } from "date-fns";

// Functions/helpers
import { clickOnSpecificDate } from "../functions/functions";
import { generateDates } from "../functions/functions";
import generateHourlyStructure from "../components/WorkHours";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function that will display days of a working week with date-fns ( from helper/functions)
  const daysDate = generateDates(currentDate);

  return (
    <div className="column-wrapper flex justify-between p-12 items-center h-full">
      {daysDate.map((dateAndWeekday) => {
        const { date, weekdayTranslated, isHolidayToday } = dateAndWeekday;

        return (
          <div
            className={`${
              date === format(new Date(), "d MMM")
                ? styles.currentDayColumnDiv
                : styles.dayColumnDiv
            } px-6 h-[489px]`}
            key={`${date}-${weekdayTranslated}`}
          >
            <div onClick={() => clickOnSpecificDate(date)}>
              <div className="date-wrapper ml-4 mt-3">
                <h3
                  className={`${
                    isHolidayToday
                      ? styles.holidayDateText
                      : date === format(currentDate, "d MMM")
                      ? styles.currentDateText
                      : styles.dateText
                  }`}
                >
                  {date}
                </h3>
                <p
                  className={`${
                    isHolidayToday
                      ? styles.holidayWeekdayText
                      : date === format(currentDate, "d MMM")
                      ? styles.currentWeekdayText
                      : styles.weekdayText
                  }`}
                >
                  {weekdayTranslated}
                </p>
              </div>
              {generateHourlyStructure(weekdayTranslated)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

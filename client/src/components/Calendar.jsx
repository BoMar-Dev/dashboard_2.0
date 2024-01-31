import { useState } from "react";
import { styles } from "../styles";
import { format } from "date-fns";

// Icons
import pen from "../assets/pen.svg";

//Helper functions
import { clickOnSpecificDate } from "../helpers/functions";
import { generateDates } from "../helpers/functions";
import { generateHourlyStructure } from "../helpers/WorkHours";

export default function Calendar() {
  const [currentDate] = useState(new Date());
  const daysDate = generateDates(currentDate);

  return (
    // Mapping out each day column ( mondag-friday)
    <div className="column-wrapper flex justify-between p-12 items-center h-full">
      {daysDate.map((dateAndWeekday) => {
        const { date, weekdayTranslated, isHolidayToday } = dateAndWeekday;

        return (
          //  will change the background color for the current date in the calendar
          <div
            className={`${
              date === format(new Date(), "d MMM")
                ? styles.currentDayColumnDiv
                : styles.dayColumnDiv
            } px-6 h-[489px]`}
            key={`${date}-${weekdayTranslated}`}
          >
            {/* Edit icon  */}
            <div dir="rtl">
              <div className=" absolute top-3 start-10  w-[50px] h-[50px] p-3">
                <img className="w-7 h-7 absolut" src={pen} />
              </div>
            </div>

            {/* If date is the current day or holiday render other style class, else render usual style */}
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

              {/* Generate working hours from 08.00 - 17.00 in every column */}
              {generateHourlyStructure()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

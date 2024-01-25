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
  const [bookEventForm, setBookEventForm] = useState(false);
  const daysDate = generateDates(currentDate);

  const bookEvent = () => {
    console.log("Button for book event is clicked ");
    setBookEventForm(true);
  };

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
                <img
                  className="w-7 h-7 absolut"
                  src={pen}
                  onClick={bookEvent}
                />

                {bookEventForm && (
                  <div className="bg-black w-[400px] h-[300px] flex justify-center rounded-md  ">
                    <form className="flex flex-col w-[50%] gap-3">
                      <label className=" ">Event</label>
                      <select className="">
                        <option selected>Dag</option>
                        <option value="1">Måndag</option>
                        <option value="2">Tisdag</option>
                        <option value="3">Onsdag</option>
                        <option value="4">Torsdag</option>
                        <option value="5">Fredag</option>
                      </select>
                      <div className="flex">
                        <input
                          className="w-[100px]"
                          placeholder="Tid från"
                          type="text"
                          pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                          title="Enter a valid 24-hour time (HH:mm)"
                          required
                        ></input>
                        <input
                          className="w-[100px]"
                          placeholder="Tid till"
                          type="text"
                          pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                          title="Enter a valid 24-hour time (HH:mm)"
                          required
                        ></input>
                      </div>
                      <button
                        className="text-white bg-green-700 rounded-sm"
                        type="submit"
                      >
                        Boka
                      </button>
                    </form>
                  </div>
                )}
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

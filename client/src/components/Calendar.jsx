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
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [eventDay, setEventDay] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const daysDate = generateDates(currentDate);

  const bookEvent = () => {
    console.log("Button for book event is clicked ");
    setBookEventForm((prevBookEventForm) => !prevBookEventForm);
  };

  const handleEventDayChange = (e) => {
    setEventDay(e.target.value);
  };

  const handleEventTimeFrom = (e) => {
    setTimeFrom(e.target.value);
  };

  const handleEventTimeTo = (e) => {
    setTimeTo(e.target.value);
  };

  const handleEventname = (e) => {
    setEventTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", {
      eventTitle,
      eventDay,
      timeFrom,
      timeTo,
    });

    setBookEventForm(false);
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
                  <div className="bg-customPurple w-[300px] h-[200px] flex justify-center rounded-md  ">
                    <form
                      className="flex flex-col w-[50%] gap-3"
                      onSubmit={handleFormSubmit}
                    >
                      <label
                        className={`${styles.regularHeaderText} text-center mt-5`}
                      >
                        BOKA NÅGOT
                      </label>
                      <select
                        className={`${styles.regularTextStyle}`}
                        onChange={handleEventDayChange}
                        defaultValue=""
                        required
                      >
                        <option
                          className={`${styles.regularTextStyle} text-left`}
                          value=""
                          disabled
                          hidden
                        ></option>
                        <option className="text-left" value="Måndag">
                          Måndag
                        </option>
                        <option className="text-left" value="Tisdag">
                          Tisdag
                        </option>
                        <option className="text-left" value="Onsdag">
                          Onsdag
                        </option>
                        <option className="text-left" value="Torsdag">
                          Torsdag
                        </option>
                        <option className="text-left" value="Fredag">
                          Fredag
                        </option>
                      </select>

                      <input
                        onChange={handleEventname}
                        className={`${styles.regularTextStyle} w-[100%] text-left`}
                        placeholder="Event namn"
                        type="text"
                        required
                      ></input>

                      <div className={`${styles.regularTextStyle} flex`}>
                        <input
                          onChange={handleEventTimeTo}
                          className="w-[75px] text-left"
                          placeholder="Tid till"
                          type="text"
                          pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                          title="Skriv en giltig tid (HH:mm)"
                          required
                        ></input>
                        <input
                          onChange={handleEventTimeFrom}
                          className="w-[75px] text-left"
                          placeholder="Tid från"
                          type="text"
                          pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                          title="Skriv en giltig tid (HH:mm)"
                          required
                        ></input>
                      </div>
                      <button
                        className={`${styles.regularTextStyle}  text-white bg-customBlue rounded-sm`}
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
              {generateHourlyStructure({
                eventDay,
                timeFrom,
                timeTo,
                eventTitle,
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

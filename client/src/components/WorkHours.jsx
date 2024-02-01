import { styles } from "../styles";
import { format } from "date-fns"; // Import date-fns for formatting
import { meetings } from "../helpers/mockData";

export const generateHourlyStructure = (currentDate) => {
  const hours = Array.from({ length: 10 }, (_, i) => i + 8);

  return (
    <div className="w-[160.58px] h-[363.54px] flex-col justify-start items-start gap-[28.17px] inline-flex ">
      {hours.map((hour, index) => (
        <div
          key={index}
          className="justify-start items-center gap-[5.63px] inline-flex"
        >
          <div className={`${styles.workHoursStyle} `}>{hour}</div>
          <div className="w-[140.15px] h-[0px] border border-thin border-neutral-500 ">
            {/* Render meetings for the current day and time */}
            {meetings
              .filter(
                (meeting) =>
                  meeting.date === format(currentDate, "d MMM") &&
                  parseInt(meeting.fromTime.split(":")[0]) === hour
              )
              .map((meeting) => (
                <div key={meeting.id}>
                  {meeting.title} ({meeting.fromTime} - {meeting.toTime})
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

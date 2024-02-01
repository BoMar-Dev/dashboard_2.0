import React from "react";
import { styles } from "../styles";
import { meetings } from "../helpers/mockData";

const generateHourlyStructure = (currentDay) => {
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
            {/* Ensure currentDay is a valid string before using toLowerCase */}
            {currentDay &&
              meetings
                .filter(
                  (meeting) =>
                    meeting.day &&
                    meeting.day.toLowerCase() === currentDay.toLowerCase()
                )
                .map((meeting) => {
                  const meetingFromTime = parseInt(
                    meeting.fromTime.split(":")[0]
                  );
                  const meetingToTime = parseInt(meeting.toTime.split(":")[0]);
                  if (hour >= meetingFromTime && hour < meetingToTime) {
                    return (
                      <div
                        key={meeting.id}
                        className={`${styles.meetingStyle}`}
                      >
                        {meeting.title}
                        <br />
                        {meeting.place}
                      </div>
                    );
                  }
                  return null;
                })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default generateHourlyStructure;

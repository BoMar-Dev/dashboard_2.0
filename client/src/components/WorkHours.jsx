import { styles } from "../styles";
import { meetings } from "../helpers/mockData";

export const generateHourlyStructure = () => {
  const hours = Array.from({ length: 10 }, (_, i) => i + 8);

  return (
    <div className="w-[160.58px] h-[363.54px] flex-col justify-start items-start gap-[28.17px] inline-flex ">
      {hours.map((hour, index) => (
        <div
          key={index}
          className="justify-start items-center gap-[5.63px] inline-flex"
        >
          <div className={`${styles.workHoursStyle} `}>{hour}</div>
          <div className="w-[140.15px] h-[0px] border border-thin border-neutral-500 "></div>
        </div>
      ))}
    </div>
  );
};

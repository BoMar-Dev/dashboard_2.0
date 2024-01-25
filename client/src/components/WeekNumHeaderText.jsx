import { styles } from "../styles";

// Helpers
import { whatWeekIsIt } from "../helpers/functions";

export default function WeekNumHeaderText() {
  return (
    <div className="flex absolute -left-[-55px] -top-[-30px]">
      <h4 className="mr-2 text-customPurple text-[22px] font-semibold font-['Source Sans Pro']">
        v.{whatWeekIsIt()}
      </h4>
      <h4 className={`${styles.regularHeaderText}`}>Kalender</h4>
    </div>
  );
}

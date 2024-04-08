import { styles } from "../styles";
// Icons
import calendar from "../assets/calendar.svg";
import basket from "../assets/basket.svg";
import mucle from "../assets/mucle.svg";
import crown from "../assets/crown.svg";
import mountain from "../assets/mountain.svg";
import smile from "../assets/smile.svg";
// Components
import MeetingGdc from "../components/MeetingGdc";
import MeetingCcv from "../components/MeetingCcv";
import Calendar from "../components/Calendar";
import WeekNumHeaderText from "../components/WeekNumHeaderText";
import ResponsabilityBar from "../components/ResponsabilityBar";
import MonthlyEvents from "../components/MonthlyEvents";
// Component Widgets
import TodoWidget from "../components/widget/shoppingList/TodoWidget";
import Responsabilitys from "../components/widget/responsabilitys/Responsabilitys";
import ChallangeCounter from "../components/widget/weeklyChallange/ChallangeCounter";
import Birthday from "../components/widget/birthday/Birthday";

export default function GdcAre() {
  return (
    <div className="wrapper flex flex-col gap-x-[60px]  p-9 2xl:p-40  2xl:ml-[90px]">
      <div className="calendar-monthlyhappenings flex flex-row space-x-[60px] ">
        <div className="w-[1257px] h-[640px] relative bg-neutral-50 rounded-[20px] ">
          {/* Purple calendar icon */}
          <div className=" absolute -left-[-50px] -top-6  w-[50px] h-[50px] p-3 bg-customPurple rounded-[38.13px]">
            <img className="w-7 h-7 absolut" src={calendar} />
          </div>

          {/* Weeknumber and header saying : Kalender  */}
          <WeekNumHeaderText />

          {/* GDC Åre div */}
          <MeetingGdc />

          {/*  Team CCV div  */}
          <MeetingCcv />

          {/* The purple information bar for breakfast, support and test */}
          <ResponsabilityBar />

          <Calendar />
        </div>

        {/* Monthly happenings column  */}
        <div className="relative">
          <div className="w-[382px] h-[640px] bg-neutral-50 rounded-[20px] overflow-y-scroll no-scrollbar overflow-auto">
            <MonthlyEvents />
          </div>
          <div className="absolute -left-[-50px] -top-6 w-[50px] h-[50px] p-3 bg-blue-700 rounded-[38.13px]">
            <img className="w-7 h-7 absolute" src={mountain} />
          </div>
        </div>
      </div>

      {/* Widget row  */}
      <div className=" mt-16 flex widget-wrapper gap-[57px] relative">
        <div>
          <TodoWidget />
          <div className={`${styles.baseWidgetsPosition} bg-red-400 rounded-[36.46px]`}>
            <img className="w-7 h-7 relative" src={basket} />
          </div>
        </div>

        <div className="relative">
          <Responsabilitys />
          <div className={`${styles.baseWidgetsPosition}  bg-orange-400 rounded-[36.46px]`}>
            <img className="w-7 h-7 relative" src={crown} />
          </div>
        </div>

        <div className="relative">
          <ChallangeCounter />
          <div className={`${styles.baseWidgetsPosition} bg-customPink rounded-[36.46px]`}>
            <img className="w-7 h-7 relative" src={mucle} />
          </div>
        </div>

        <div className="relative">
          <Birthday />
          <div className={`${styles.baseWidgetsPosition} bg-yellow-300 rounded-[36.46px]`}>
            <img className="w-7 h-7 relative" src={smile} />
          </div>
        </div>
      </div>
    </div>
  );
}

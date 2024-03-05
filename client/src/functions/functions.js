// Date-fns
import { addDays, format, startOfWeek, getWeek} from "date-fns";

// Package ( note sure this on works )
import isHoliday from "holidays-nordic";


// Helper TRANSLATE
import {
  translateMonthToSwedish,
  translateWeekdayToSwedish,
} from "./translate";


// C  A  L  E  N  D  A  R -   Generat dynamic(real) dates in the 5 day column calendar
export const generateDates = (currentDate) => {
  const firstDayOfWorkWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const daysDate = [];

  for (let i = 0; i < 5; i++) {
    const date = addDays(firstDayOfWorkWeek, i);
    const formattedDate = format(date, "d MMM");
    const formattedDateTranslated = translateMonthToSwedish(formattedDate);
    const weekday = format(date, "EEEE");
    const weekdayTranslated = translateWeekdayToSwedish(weekday);

    const isHolidayToday = isHoliday(date, "se");
    daysDate.push({
      date: formattedDateTranslated,
      weekdayTranslated,
      isHolidayToday,
    });
  }

  return daysDate;
  
};


// Click on a date and get it logged in the console
export const clickOnSpecificDate = (clickedDate) => {
  console.log("Clicked date:", clickedDate);
};


//Get week
export const whatWeekIsIt = () =>{

  const weeknumber = getWeek(new Date(), {
   weekStartsOn: 1,
    firstWeekContainsDate: 4
  })
 
  return weeknumber
}


//  W  I  D  G  E  T 



// //  W  I  D  G  E  T -  saving whats put inside the input field




//   W  I  D  G  E  T  Reset to weekly challange widget 
    export const reset = (setCount) => {
      setCount({
        pushups: 0,
        squat: 0,
        situps: 0,
        lounges: 0,
        sitInSofa: 0,
      });
    };
 

// //  W  I  D  G  E  T -  Increment to weekly challange widget
export const plus = (workout, count, setCount) => {
  if (count[workout] < 100) {
    setCount((prevCount) => ({  ...prevCount,[workout]: prevCount[workout] + 1, })); // this code takes the previous count state (prevCount), makes a copy of it, and then updates the count of the specified workout by adding 1.  // Finally, it sets this updated count as the new state for count.
  } else if (count[workout] === 100) 
  
  console.log(`${workout} Increment button is clicked`);
};


// //  W  I  D  G  E  T  -  Decrement to weekly challange widget 
 export const minus = (workout, count, setCount) => {
  if (count[workout] > 0) {
    setCount((prevCount) => ({ ...prevCount, [workout]: prevCount[workout] - 1, }));
  } else if (count[workout] < 100) {
  }
  console.log(`${workout} Decrement button is clicked`);
};

import { styles } from "../styles";
import frukost from "../assets/frukost.svg";
import support from "../assets/support.svg";
import test from "../assets/test.svg";
import { useEffect, useState } from "react";

//functions/helpers
import { whatWeekIsIt } from "../functions/functions";

const responsabilityEndpoint = "http://localhost:3001/api/responsability";

export default function ResponsabilityBar() {
  const [responsabilitybar, setResponsabilitybar] = useState([]);
  const [currentBreakfast, setCurrentBreakfast] = useState("");
  const [currentSupport, setCurrentSupport] = useState("");
  const [currentTest, setCurrentTest] = useState("");

  useEffect(() => {
    const fetchResponsabilitybarApi = async () => {
      try {
        const response = await fetch(responsabilityEndpoint);
        const responsabilitybarData = await response.json();

        const currentWeek = whatWeekIsIt();

        const currentWeekData = responsabilitybarData.find((item) => item.week === currentWeek);

        if (currentWeekData) {
          setCurrentBreakfast(currentWeekData.breakfast);
          setCurrentSupport(currentWeekData.support);
          setCurrentTest(currentWeekData.test);
        }

        setResponsabilitybar(responsabilitybarData);
        console.log("This is CGI responsability", responsabilitybarData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchResponsabilitybarApi();
  }, []);

  return (
    <div className="">
      {responsabilitybar.slice(0, 1).map((item, index) => {
        return (
          <div className="absolute bottom-0 right-8 flex gap-4 mb-5 mr-14" key={index}>
            <div className={`${styles.regularTextStyle} flex items-center`}>
              <img className="w-7 h-7 mr-2" src={frukost} alt="Frukost icon" />
              <p>Frukost:</p>
              <span className=" ml-1 mr-5">{currentBreakfast}</span>
            </div>

            <div className={`${styles.regularTextStyle} flex items-center`}>
              <img className="w-7 h-7 mr-2" src={support} alt="Support icon" />
              <p>Support: </p>
              <div className=" ml-1 mr-5">{currentSupport}</div>
            </div>

            <div className={`${styles.regularTextStyle} flex items-center`}>
              <img className="w-7 h-7 mr-2" src={test} alt="Test icon" />
              <p>Test: </p>
              <span className="ml-1">{currentTest}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

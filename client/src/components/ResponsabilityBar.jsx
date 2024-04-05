import { styles } from "../styles";
import frukost from "../assets/frukost.svg";
import support from "../assets/support.svg";
import test from "../assets/test.svg";

import { useEffect, useState } from "react";

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
          <div
            className="absolute flex bottom-0 right-[490px] w-[100px] h-[50px]    "
            key={index} // Use index as the key
          >
            <div className={`${styles.regularTextStyle} breakfast mx-8 flex`}>
              <img className="w-7 h-7 absolut mr-2 " src={frukost} />
              <p className="mt-1">Frukost: </p>
              <span className="mx-1 mt-1">{currentBreakfast}</span>
            </div>

            <div className={`${styles.regularTextStyle} breakfast mx-8 flex`}>
              <img className="w-7 h-7 absolut mr-2" src={support} />
              <p className="mt-1">Support:</p>
              <span className="mx-1  mt-1">{currentSupport}</span>
            </div>

            <div className={`${styles.regularTextStyle} breakfast mx-8 flex w-96`}>
              <img className="w-7 h-7 absolut mr-2" src={test} />
              <div className="flex w-96">
                <span className="mt-1">Test:</span>
                <span className="mx-1 mt-1">{currentTest}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

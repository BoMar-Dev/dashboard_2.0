import { styles } from "../../../styles";
import pen from "../../../assets/pen.svg";
import { useEffect, useState } from "react";

// Functions/ Helpers
import { whatWeekIsIt } from "../../../functions/functions";

//Endpoint
const responsabilityEndpoint = "http://localhost:3001/api/responsability";

export default function Responsabilitys() {
  const [responsability, setResponsability] = useState([]);

  //This week
  const [currentBreakfast, setCurrentBreakfast] = useState("");
  const [currentSupport, setCurrentSupport] = useState("");
  const [currentTest, setCurrentTest] = useState("");

  // Next week
  const [oneWeekAfterBreakfast, setOneWeekAfterBreakfast] = useState("");
  const [oneWeekAfterSupport, setOneWeekAfterSupport] = useState("");
  const [oneWeekAfterTest, setOneWeekAfterTest] = useState("");

  // the week after next week
  const [twoWeekAfterBreakfast, setTwoWeekAfterBreakfast] = useState("");
  const [twoWeekAfterSupport, setTwoWeekAfterSupport] = useState("");
  const [twoWeekAfterTest, setTwoWeekAfterTest] = useState("");

  // three weeks from now
  const [threeWeekAfterBreakfast, setThreeWeekAfterBreakfast] = useState("");
  const [threeWeekAfterSupport, setThreeWeekAfterSupport] = useState("");
  const [threeWeekAfterTest, setThreeWeekAfterTest] = useState("");

  useEffect(() => {
    const fetchResponsabilityApi = async () => {
      try {
        const response = await fetch(responsabilityEndpoint);
        const responsabilityData = await response.json();

        const currentWeek = whatWeekIsIt();
        const nextWeek = whatWeekIsIt() + 1;
        const weekAfterNext = whatWeekIsIt() + 2;
        const threeWeeksAfter = whatWeekIsIt() + 3;

        const currentWeekData = responsabilityData.find((item) => item.week === currentWeek);

        const oneWeekAfterData = responsabilityData.find((item) => item.week === nextWeek);

        const twoWeekAfterData = responsabilityData.find((item) => item.week === weekAfterNext);

        const threeWeekAfterData = responsabilityData.find((item) => item.week === threeWeeksAfter);

        if (currentWeekData) {
          setCurrentBreakfast(currentWeekData.breakfast);
          setCurrentSupport(currentWeekData.support);
          setCurrentTest(currentWeekData.test);
        }

        if (oneWeekAfterData) {
          setOneWeekAfterBreakfast(oneWeekAfterData.breakfast);
          setOneWeekAfterSupport(oneWeekAfterData.support);
          setOneWeekAfterTest(oneWeekAfterData.test);
        }

        if (twoWeekAfterData) {
          setTwoWeekAfterBreakfast(twoWeekAfterData.breakfast);
          setTwoWeekAfterSupport(twoWeekAfterData.support);
          setTwoWeekAfterTest(twoWeekAfterData.test);
        }

        if (threeWeekAfterData) {
          setThreeWeekAfterBreakfast(threeWeekAfterData.breakfast);
          setThreeWeekAfterSupport(threeWeekAfterData.support);
          setThreeWeekAfterTest(threeWeekAfterData.test);
        }

        setResponsability(responsabilityData);
        console.log("This is CGI responsability", responsabilityData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchResponsabilityApi();
  }, []);

  return (
    <div>
      <div className=" w-[382px] h-[270px] bg-neutral-50 rounded-[20px] mt-2 p-6 px-12">
        <div className="flex justify-between ">
          <h1 className={`${styles.regularHeaderText} mt-1`}>Ansvarsområden</h1>
          {/* // Not sure if this will be editable */}
          {/* <img className="cursor- w-7 h-7 mt-1" src={pen} /> */}
        </div>

        <table className={`${styles.regularTextStyle}  w-full text-sm text-left rtl:text-right className="px-5" `}>
          <thead>
            <tr>
              <th className="px-1 py-1.5">Veckor</th>
              <th className="px-1 py-1.5">Frukost</th>
              <th className="px-1 py-1.5">Support</th>
              <th className="px-1 py-1.5">Test</th>
            </tr>
          </thead>

          {responsability.slice(0, 1).map((index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td className="px-1 py-1.5">v.{whatWeekIsIt()}</td>
                  <td className="px-1 py-1.5">{currentBreakfast}</td>
                  <td className="px-1 py-1.5">{currentSupport}</td>
                  <td className="px-1 py-1.5">{currentTest}</td>
                </tr>
                <tr>
                  <td className="px-1 py-1.5">v.{whatWeekIsIt() + 1}</td>
                  <td className="px-1 py-1.5">{oneWeekAfterBreakfast}</td>
                  <td className="px-1 py-1.5">{oneWeekAfterSupport}</td>
                  <td className="px-1 py-1.5">{oneWeekAfterTest}</td>
                </tr>
                <tr>
                  <td className="px-1 py-1.5">v.{whatWeekIsIt() + 2}</td>
                  <td className="px-1 py-1.5">{twoWeekAfterBreakfast}</td>
                  <td className="px-1 py-1.5">{twoWeekAfterSupport}</td>
                  <td className="px-1 py-1.5">{twoWeekAfterTest}</td>
                </tr>
                <tr>
                  <td className="px-1 py-1.5">v.{whatWeekIsIt() + 3}</td>
                  <td className="px-1 py-1.5">{threeWeekAfterBreakfast}</td>
                  <td className="px-1 py-1.5">{threeWeekAfterSupport}</td>
                  <td className="px-1 py-1.5">{threeWeekAfterTest}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

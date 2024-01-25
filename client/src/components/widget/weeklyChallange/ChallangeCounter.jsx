import { styles } from "../../../styles";
import { useState } from "react";

//Icons
import pen from "../../../assets/pen.svg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

// Incriment, decrement and reset button functions
import { reset } from "../../../helpers/functions";
import { plus } from "../../../helpers/functions";
import { minus } from "../../../helpers/functions";

export default function ChallangeCounter() {
  const [count, setCount] = useState({
    pushups: 0,
    squat: 0,
    situps: 0,
    lounges: 0,
    sitInSofa: 0,
  });

  //DRY!!!! Will try do to this in a more dynamic view, but good for now ( MAP )

  return (
    <div>
      <div className="w-[382px] h-[270px] bg-neutral-50 rounded-[20px] mt-2 p-6 px-12">
        <div className="flex justify-between ">
          <h1 className={`${styles.regularHeaderText} mt-2`}>
            Veckans utmaning
          </h1>
          <img className="cursor- w-7 h-7 mt-1" src={pen} />
        </div>

        <ul>
          <li className={`${styles.regularTextStyle} mt-1 `}>
            <div className="flex justify-between mb-3 ">
              <h4 className="w-[150px]">Armhävnigar </h4>
              <button
                className="text-xl"
                onClick={() => minus("pushups", count, setCount)}
              >
                <CiCircleMinus />
              </button>
              <p>{count.pushups}</p>
              <button
                className="text-xl"
                onClick={() => plus("pushups", count, setCount)}
              >
                <IoIosAddCircleOutline />
              </button>
              <p>/ 100</p>
            </div>

            <div className="flex justify-between mb-3">
              <h4 className="w-[150px]">Benböj </h4>
              <button className="text-xl">
                <CiCircleMinus
                  onClick={() => minus("squat", count, setCount)}
                />
              </button>
              <p>{count.squat}</p>
              <button className="text-xl">
                <IoIosAddCircleOutline
                  onClick={() => plus("squat", count, setCount)}
                />
              </button>
              <p> / 100</p>
            </div>

            <div className="flex justify-between mb-3">
              <h4 className="w-[150px]">Sit-Ups </h4>
              <button className="text-xl">
                <CiCircleMinus
                  onClick={() => minus("situps", count, setCount)}
                />
              </button>
              <p>{count.situps}</p>
              <button className="text-xl">
                <IoIosAddCircleOutline
                  onClick={() => plus("situps", count, setCount)}
                />
              </button>
              <p>/ 100</p>
            </div>

            <div className="flex justify-between mb-3">
              <h4 className="w-[150px]">Utfall </h4>
              <button className="text-xl">
                <CiCircleMinus
                  onClick={() => minus("lounges", count, setCount)}
                />
              </button>
              <p>{count.lounges}</p>
              <button className="text-xl">
                <IoIosAddCircleOutline
                  onClick={() => plus("lounges", count, setCount)}
                />
              </button>
              <p>/ 100</p>
            </div>

            <div className="flex justify-between mb-1">
              <h4 className="w-[150px]">Sitta i soffa </h4>
              <button className="text-xl">
                <CiCircleMinus
                  onClick={() => minus("sitInSofa", count, setCount)}
                />
              </button>
              <p>{count.sitInSofa}</p>
              <button className="text-xl">
                <IoIosAddCircleOutline
                  onClick={() => plus("sitInSofa", count, setCount)}
                />
              </button>
              <p>/ 100</p>
            </div>
            <div className="flex p-1 ml-[160px]">
              <button
                className={`${styles.regularTextStyle} bg-customPink hover:bg-customBlue text-white w-[75px] mt-0.5 px-2 rounded just`}
                onClick={() => {
                  reset(setCount);
                }}
              >
                Reset
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

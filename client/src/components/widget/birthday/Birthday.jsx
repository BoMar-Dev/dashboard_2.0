import React from "react";
import bgBirthday from "../../../assets/bg-birthday.jfif";

export default function Birthday() {
  return (
    <div>
      <div
        className=" relative w-[382px] h-[270px] bg-cover bg-center bg-no-repeat rounded-[20px] mt-2"
        style={{ backgroundImage: `url(${bgBirthday})` }}
      >
        <p className=" absolute bottom-7 left-10  text-neutral-50 text-[120px] font-semibold font-['Inter'] ">
          2
        </p>
        <div>
          <p className=" absolute bottom-10 left-10  text-xl font-bold text-white ">
            dagar kvar tills
          </p>
          <p className=" absolute bottom-4 left-10 text-xl font-bold text-white">
            namn <span>födelsedag</span>
          </p>
        </div>
      </div>
    </div>
  );
}

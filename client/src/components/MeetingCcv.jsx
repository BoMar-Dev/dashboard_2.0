import { styles } from "../styles";

export default function MeetingCcv() {
  return (
    <div>
      <div className=" absolute  -bottom-[-7px] left-[370px]  w-[51px] h-[52px] p-2 bg-babyBlue rounded-[5px] flex-col justify-center items-center gap-2 inline-flex">
        <div className="w-[39px] text-center text-zinc-600 text-sm font-semibold font-['Source Sans Pro'] tracking-wide">
          Team CCV
        </div>
      </div>
      <div
        className={`${styles.regularTextStyle} w-[209px] absolute -bottom-[-11px] left-[435px]`}
      >
        Möten & aktiviteter för Team CCV
      </div>
    </div>
  );
}

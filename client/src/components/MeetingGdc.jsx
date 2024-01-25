import { styles } from "../styles";

export default function MeetingGdc() {
  return (
    <div>
      <div className=" absolute  -bottom-[-7px] left-12  w-[51px] h-[52px] p-2 bg-red-100 rounded-[5px] flex-col justify-center items-center gap-2 inline-flex">
        <div className="w-[39px] text-center text-zinc-600 text-sm font-semibold font-['Source Sans Pro'] tracking-wide">
          GDC Åre
        </div>
      </div>
      <div
        className={`${styles.regularTextStyle} w-[209px] absolute -bottom-[-11px] left-[115px]`}
      >
        Möten och aktiviteter för alla CGI members på Åre-kontoret
      </div>
    </div>
  );
}

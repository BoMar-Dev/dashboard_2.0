import { styles } from "../styles";

// Functions / Helpers
import { happenings } from "../functions/mockData";

export default function MonthlyEvents() {
  return (
    <div className="p-9 relative">
      <div className="sticky">
        <h2 className={`${styles.regularHeaderText}`}>Månadens Händelser</h2>
      </div>
      {happenings.map((happening, index) => {
        return (
          <div
            key={index}
            className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex mt-5 text-ce"
          >
            <div className="justify-start items-start inline-flex">
              <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide mb-5">
                {happening.date}
              </div>
              <div className="justify-start items-start gap-[8.23px] flex">
                <div className="mb-5">
                  <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                    {happening.title}
                    <br />
                  </span>
                  <span
                    style={{ color: "#374151" }}
                    className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
                  >
                    {happening.fromTme}
                  </span>

                  <span
                    style={{ color: "#374151" }}
                    className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
                  >
                    {happening.toTime}
                  </span>

                  <span
                    style={{ color: "#374151" }}
                    className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
                  >
                    {happening.place}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[305px] h-[0px] border border-neutral-300"></div>
            {/* Repeat the pattern for other entries */}
          </div>
        );
      })}
    </div>
  );
}

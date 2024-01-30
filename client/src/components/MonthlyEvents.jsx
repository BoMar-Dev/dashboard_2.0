// På denna sida så vill jag kunna hämta ett api med event från outlook och rendera ut dem istället för de hårdkodade eventen som just nu står
// Jag vill också göra renderingen mer dynamisk med hjälp av map
import mountain from "../assets/mountain.svg";

export default function MonthlyEvents() {
  return (
    <div className="p-9 relative">
      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className=" absolute w-[50px] h-[50px] p-[9.72px] bg-blue-700 rounded-[36.46px] top-[-20px] right-[300px]  z-[10000px] ">
          <img className="w-7 h-7 absolute" src={mountain} />
        </div>
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            2 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Kontorslunch
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                12.00-13.00, Broken
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            4 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Retrospektiv
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                12.00-13.00, Sylarna
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            10 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Ida Fyller år
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              ></span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            13 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Topptur
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                12.00-16.00, Storulvån
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            13 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Erik Fyller år
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              ></span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            18 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Veckomöte
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                09.00-10.00, Åre
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            22 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Sprintplannering
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                10.00-11.00, sylarna
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            26 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                After Work
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                16.00- ---, Vinbaren
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            27 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                CGI Östersund
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                08.00-16.00 Östersund
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            28 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Micke fyller år
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              ></span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            29 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Brandövning
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                14.00-16.00
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            29 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Padel
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                10.00-11.00
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>

      <div className="w-[304px]  flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="w-[92px] text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
            31 maj
          </div>
          <div className="justify-start items-start gap-[8.23px] flex">
            <div>
              <span className="text-zinc-600 text-base font-semibold font-['Source Sans Pro'] tracking-wide">
                Veckomöte
                <br />
              </span>
              <span
                style={{ color: "#374151" }}
                className="text-zinc-600 text-sm font-normal font-['Source Sans Pro'] leading-[21px] tracking-wide"
              >
                08.00-09.00
              </span>
            </div>
          </div>
        </div>
        <div className="w-[305px] h-[0px] border border-neutral-300"></div>
        {/* Repeat the pattern for other entries */}
      </div>
    </div>
  );
}

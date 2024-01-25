import { styles } from "../../../styles";
import pen from "../../../assets/pen.svg";

// Helpers
import { whatWeekIsIt } from "../../../helpers/functions";

export default function WidgetTwo() {
  return (
    <div>
      <div className=" w-[382px] h-[270px] bg-neutral-50 rounded-[20px] mt-2 p-6 px-12">
        <div className="flex justify-between ">
          <h1 className={`${styles.regularHeaderText} mt-1`}>Ansvarsområden</h1>
          <img className="cursor- w-7 h-7 mt-1" src={pen} />
        </div>

        <table
          className={`${styles.regularTextStyle}  w-full text-sm text-left rtl:text-right className="px-5" `}
        >
          <thead>
            <tr>
              <th className="px-1 py-1.5">Veckor</th>
              <th className="px-1 py-1.5">Frukost</th>
              <th className="px-1 py-1.5">Support</th>
              <th className="px-1 py-1.5">Test</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-1 py-1.5">v.{whatWeekIsIt()}</td>
              <td className="px-1 py-1.5">Ida</td>
              <td className="px-1 py-1.5">Line</td>
              <td className="px-1 py-1.5">Alex</td>
            </tr>
            <tr>
              <td className="px-1 py-1.5">v.{whatWeekIsIt() + 1}</td>
              <td className="px-1 py-1.5">Hans</td>
              <td className="px-1 py-1.5">Micke</td>
              <td className="px-1 py-1.5">Erik</td>
            </tr>
            <tr>
              <td className="px-1 py-1.5">v.{whatWeekIsIt() + 2}</td>
              <td className="px-1 py-1.5">Lisa</td>
              <td className="px-1 py-1.5">Andreas</td>
              <td className="px-1 py-1.5">Dennis</td>
            </tr>

            <tr>
              <td className="px-1 py-1.5">v.{whatWeekIsIt() + 3}</td>
              <td className="px-1 py-1.5">Alex</td>
              <td className="px-1 py-1.5">Jackie</td>
              <td className="px-1 py-1.5">Hans</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

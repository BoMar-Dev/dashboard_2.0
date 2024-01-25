import { styles } from "../styles";
import frukost from "../assets/frukost.svg";
import support from "../assets/support.svg";
import test from "../assets/test.svg";

//nothing in this component is currently dynamic

export default function ResponsabilityBar() {
  return (
    <div className="absolute flex bottom-0 right-[490px] w-[100px] h-[50px]   ">
      
      <div className={`${styles.regularTextStyle} breakfast mx-8 flex`}>
        <img className="w-7 h-7 absolut mr-2 " src={frukost} />
        <p className="mt-1">Frukost: </p>
        <span className="mx-1 font-semibold mt-1">Hans</span>
      </div>
      
      <div className={`${styles.regularTextStyle} breakfast mx-8 flex`}>
        <img className="w-7 h-7 absolut mr-2" src={support} />
        <p className="mt-1">Support:</p>
        <span className="mx-1 font-semibold mt-1">Ida</span>
      </div>
      
      <div className={`${styles.regularTextStyle} breakfast mx-8 flex`}>
        <img className="w-7 h-7 absolut mr-2" src={test} />
        <p className="mt-1">Test:</p>
        <span className="mx-1 font-semibold mt-1">Alex</span>
      </div>
   
    </div>
  );
}

import { useContext } from "react";
import IconsBar from "./navbar/IconsBar";
import bgImage from "../../assets/pattern2.png"
import StatesContext from "../../context/StatesContext";

export default function Footer() {

  const { mode: { darkMode } } = useContext(StatesContext);

  const footerData = [
    ["Lapas epasts:", "martins.sturainis.html@gmail.com"],
    ["Personīgais epasts:", "martins.sturainis.lspa@gmail.com"],
    ["Tālrunis:", "+371 28 924 782"],
    ["Lapas source code:", "https://github.com/AutocorrectGuy/portfolio"],
  ]

  return (
    <div className={`${darkMode ? "bg-black" : "bg-sky-500"} 
      relative w-full min-h-[240px] pt-[50px]`}
    >
      <div className="z-0 absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          opacity: "3%"    
        }}
      ></div>
      <div className="flex flex-col justify-end gap-10 max-w-xl mx-auto h-full">
        <div className="z-0 flex max-w-xl w-full justify-around">
          <div className="flex gap-10">
            <img src="https://avatars.githubusercontent.com/u/71926334?v=4" className="rounded-full w-24 h-24" />
            <table className="table">
              <tbody>
                {
                  footerData.map((item, i) =>
                    <tr key={`footer-item-${i}`} className="table-row">
                      <td className="table-cell pr-3">
                        <p className="text-sky-100 whitespace-nowrap font-bold select-none">{item[0]}</p>
                      </td>
                      <td className="table-cell">
                        <p className="text-sky-50 whitespace-nowrap cursor-pointer hover:text-sky-900">{item[1]}</p>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
          <IconsBar 
            parentStyleClass={"flex items-center gap-6"} 
            styleClass={`w-16 h-16 ${darkMode ? "text-neutral-300 hover:text-sky-400" : "text-white hover:text-sky-900"} max-h-[64px] duration-200 ease-in-out`} />
        </div>
        <div className={`${darkMode ? "border-t-neutral-900" : "border-t-sky-700"} flex justify-between text-sky-100 text-center py-5 border-t text-sm font-light`}>
          <p>Mārtiņš Stūrainis, 2022</p>
          <p>{`Lapa pēdējo reizi atjaunota 2022. gada 9. jūnijā (V. 0.03)`}</p>
        </div>
      </div>

    </div>
  )
}
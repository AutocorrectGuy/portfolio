import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Switch from "../utils/Switch";
import IconsBar from "./IconsBar";
import DonateButton from "../utils/DonateButton";
import { useContext, useEffect } from "react";
import StatesContext from "../../../context/StatesContext";


export default function FirstRow() {

  const {mode: {darkMode}} = useContext(StatesContext);

  return (
    <div className={`${darkMode ? "bg-neutral-900 shadow-[#101010]" : "bg-white shadow-neutral-300"}
      w-full h-10 shadow-md `
    }>
      <div className="flex max-w-xl w-full h-full mx-auto justify-between py-2">
        <div className={`${darkMode ? "text-neutral-300" : "text-black"} flex items-center gap-2`}>
          <FontAwesomeIcon icon={faArrowLeft} className={"w-3 h-3"} />
          <p>Uz sākumu</p>
        </div>
        <div className="flex h-full gap-3">
          <IconsBar 
            styleClass={`w-5 h-5 ${darkMode 
              ? "text-neutral-300 hover:text-sky-400" 
              : "text-black hover:text-purple-600"} max-h-[20px]`} 
            parentStyleClass={"flex items-center gap-3"} />
          <div className={`${darkMode ? "border-r-neutral-800" : "border-r-neutral-300"} border-r`}></div>
          <div className="flex items-center">
            <Switch/>
          </div>
        </div>
      </div>
    </div>
  )
}
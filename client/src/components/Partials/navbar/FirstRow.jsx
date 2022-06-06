import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Switch from "../utils/Switch";
import IconsBar from "./IconsBar";


export default function FirstRow() {
  return (
    <div className="w-full h-10 shadow-md bg-white shadow-neutral-300">
      <div className="flex max-w-xl w-full h-full mx-auto justify-between py-2">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowLeft} className={"w-3 h-3"} />
          {/* <p>Uz sākumu</p> */}
        </div>
        <div className="flex h-full gap-3">
          <IconsBar styleClass={"w-5 h-5 text-black hover:text-purple-600"} parentStyleClass={"flex items-center gap-3"}/>
          <div className="border-r border-r-neutral-300"></div>
          <div className="flex items-center">
            <Switch />
          </div>
        </div>
      </div>
    </div>
  )
}
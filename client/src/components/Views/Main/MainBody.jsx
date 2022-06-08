import { useContext } from "react";
import Slider from "../../Partials/utils/Slider";
import EducationGrid from "./EducationGrid";
import UsedTechScroller from "./UsedTechScroller";
import StatesContext from "../../../context/StatesContext";

export default function MainBody() {
  
  const { mode: { darkMode } } = useContext(StatesContext);

  return (
    <div className={`${darkMode ? "bg-neutral-800 border-neutral-800" : "bg-white border-neutral-200"}
    border flex flex-col max-w-xl w-full h-full mx-auto mt-8 p-4 justify-between rounded-t-md`
    }>
      <Slider />
      <EducationGrid />
      <UsedTechScroller />
    </div>
  )
}
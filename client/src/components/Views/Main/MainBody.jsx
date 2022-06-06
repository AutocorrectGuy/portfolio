import { useEffect, useState, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCheck, faTimes, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Slider from "../../Partials/utils/Slider";
import { schoolsData } from "../../../SchoolsData"
import EducationGrid from "./EducationGrid";
import ITSkillsGrid from "./ITSkillsGrid";

export default function MainBody() {

  return (
    <div className="flex flex-col max-w-xl w-full h-full mx-auto mt-8 p-4
      justify-between rounded-t-md bg-white border border-neutral-200">
      <Slider />
      <EducationGrid />
      <ITSkillsGrid />
    </div>
  )
}
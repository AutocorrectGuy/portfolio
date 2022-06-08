import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import StatesContext from "../../../context/StatesContext";

export default function ThirdRow() {

  const { mode: { darkMode } } = useContext(StatesContext);

  const navButtonsList = [
    { name: "", isDropdown: false, icon: faHome },
    { name: "Skola", isDropdown: true },
    { name: "Aktuāli", isDropdown: true },
    { name: "Programmas", isDropdown: true },
    { name: "Audzēkņiem", isDropdown: true },
    { name: "Projekti", isDropdown: false },
    { name: "Jaunumi", isDropdown: false },
    { name: "Kontakti", isDropdown: false },
  ];

  function NavBtn({ name, isDropdown, icon }) {
    return (
      <button className={`
        ${icon === faHome && "rounded-tl-md"} 
        ${icon === faSearch && "rounded-r-md"} 
        relative flex flex-col items-center text-white font-semibold px-6 hover:bg-purple-600 duration-200 ease-in-out`}
        >
        <div className="flex gap-2 h-full items-center text-white">
          {name.length > 0 &&
            <p>{name}</p>
          }
          {isDropdown &&
            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
          }
          {icon !== undefined &&
            <FontAwesomeIcon icon={icon} className="w-6 h-6" />
          }
        </div>
        {
          icon === faHome &&
          <div className="absolute -bottom-[3px] w-full border-b-[6px] border-b-purple-600"></div>
        }
      </button>
    );
  }

  return (
    <div className={`${darkMode ? "shadow-[#101010] bg-neutral-800" : "shadow-neutral-300 bg-sky-500"} 
    flex max-w-xl w-full h-16 justify-between mx-auto shadow-md rounded-md`}>
      <div className="flex justify-between">
        {
          navButtonsList.map(({ name, isDropdown, icon }, i) =>
            <NavBtn key={`nav-btn-${i}`} name={name} isDropdown={isDropdown} icon={icon} />
          )
        }
      </div>
      <NavBtn key={`nav-btn-${navButtonsList.length}`} name="" icon={faSearch} />
    </div>
  )
}
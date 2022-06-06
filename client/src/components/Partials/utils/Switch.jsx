import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Switch() {

  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center">
        {/*   Switch Container */}
        <div
          className={`
            ${toggle ? `bg-sky-200` : "bg-neutral-700"} 
            w-[42px] h-[22px] flex items-center rounded-full cursor-pointer px-[1px]`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}

          <div
            className={
              `${toggle ? `${toggleClass} bg-sky-600` : "bg-white"} flex items-center justify-center h-5 w-5 rounded-full border border-transparent shadow-md transform duration-300 ease-in-out`
            }
          >
            <FontAwesomeIcon icon={toggle ? faSun : faMoon} 
              className={`${toggle ? "text-white" : "text-black bg-neutral-200 w-[14px] h-[14px]"} transform duration-300 ease-in-out rounded-full`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Switch;

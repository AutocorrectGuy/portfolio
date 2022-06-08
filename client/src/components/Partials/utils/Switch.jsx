import { useRef, useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie"
import StatesContext from "../../../context/StatesContext";

function Switch() {

  const {mode: {darkMode, setDarkMode}} = useContext(StatesContext);
  const value = useContext(StatesContext);
  const [cookie, setCookie, removeCookie] = useCookies(['context-cookie']);
  const toggleClass = " transform translate-x-5";

  useEffect(() => {
    console.log(value)
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center">
        {/*   Switch Container */}
        <div
          className={`
            ${darkMode ? "bg-neutral-700" : `bg-sky-200`} 
            w-[42px] h-[22px] flex items-center rounded-full cursor-pointer px-[1px] overflow-hidden`}
          onClick={() => {
            setDarkMode(() => {
              console.log("Mode changed from " + darkMode + " to " + !darkMode)
              return !darkMode;
            });
            // let newCookie = cookie["context-cookie"];
            // newCookie.lightMode = !toggle;
            // setCookie("context-cookie", newCookie)
          }}
        >
          {/* Switch */}

          <div
            className={
              `${darkMode ? `${toggleClass} bg-sky-600` : "bg-white shadow-md shadow-neutral-500"} flex items-center justify-center h-5 w-5 rounded-full border border-transparent shadow-md transform duration-300 ease-in-out`
            }
          >
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} 
              className={`${darkMode ? "text-white" : "text-black bg-neutral-200 w-[14px] h-[14px]"} transform duration-300 ease-in-out rounded-full`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Switch;

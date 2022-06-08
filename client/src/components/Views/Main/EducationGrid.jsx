import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCheck, faTimes, faCalendarAlt, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { schoolsData } from "../../../SchoolsData"
import StatesContext from "../../../context/StatesContext";

export default function EducationGrid() {

  const { mode: { darkMode } } = useContext(StatesContext);

  function GridList() {

    function SchoolCard({ cardData }) {
      const { color, color2, color3, imgUrl, school, course, started, finished, done, comment, pdf } = cardData;

      const [mouseEnter, setMouseEnter] = useState(false);

      return (
        <div className={`${darkMode
          ? "shadow-md shadow-neutral-900 hover:shadow-black"
          : "shadow-sm shadow-neutral-100 hover:shadow-neutral-300"}
          flex flex-col rounded-sm overflow-hidden hover:shadow-md `}
          onMouseEnter={() => { pdf && setMouseEnter(true) }}
          onMouseLeave={() => { pdf && setMouseEnter(false) }}
        >
          <div className={`${darkMode 
            ? "bg-neutral-900" 
            : "bg-white"} flex relative pb-[100%]`}>
            <div className="absolute flex w-full h-full top-0 left-0 p-2 lg:p-6"
              style={{
                background: `${!darkMode && "radial-gradient(black, transparent)"}`,
                opacity: `${!darkMode && "10%"}`
              }}
            />
            <div className="absolute flex w-full h-full top-0 left-0 items-center justify-center p-2 lg:p-6">
              <img
                src={imgUrl}
                className={`
                ${school === "Jāņa Norviļa Madonas mūzikas skola" && darkMode && "invert"} 
                h-fit`}
              />
            </div>
            {
              mouseEnter &&
              <a className=" z-10 absolute flex w-full h-full top-0 left-0 items-center justify-center p-2 lg:p-6 cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href={`${window.location.href}${pdf}`}
              >
                <div className={`bg-sky-300 absolute bg-opacity-20 blur-sm top-0 left-0 w-full h-full`}></div>
                <FontAwesomeIcon icon={faUnlock} className={"z-10 flex w-2/3 h-2/3 text-black"} />
              </a>
            }
            <div className={`${darkMode ? "border-b-neutral-700" : "border-b-sky-500"} absolute left-0 bottom-0 mb-[9px] p-3 border-r-[20px] border-r-transparent border-b-[20px] text-transparent select-none`}>{started}</div>
            <p className={`absolute left-0 bottom-0  text-white p-2 mx-2 select-none`}>{started}</p>
            <div className={`${darkMode ? "border-t-neutral-700" : "border-t-sky-100"} 
            absolute top-3 right-4 mb-[9px] p-3 border-l-[20px] border-l-transparent border-t-[20px] text-transparent select-none w-5`}></div>
            <FontAwesomeIcon
              icon={done ? faCheck : faTimes}
              className={`
                w-5 h-5 absolute top-3 right-[18px] select-none 
                ${darkMode
                  ? "text-neutral-300"
                  : done
                    ? "text-green-500"
                    : "text-red-500"}
                `
              }
            />
          </div>
          <div className="flex flex-col gap-2 px-4 pb-8 pt-3">
            <p className={`${darkMode ? "text-neutral-300" : "text-neutral-700"} font-bold leading-4 select-none`}>{course}</p>
            <div className={`${darkMode ? "text-neutral-500" : "text-neutral-400"} flex gap-2 items-center`}>
              <FontAwesomeIcon icon={faGraduationCap} className={"w-4 h-4"} />
              <p className="text-sm leading-4 select-none">{school}</p>
            </div>
            {
              comment &&
              <div className={`${darkMode ? "text-neutral-500" : "text-neutral-400"} flex gap-2 items-center`}>
                <FontAwesomeIcon icon={faCalendarAlt} className={"w-4 h-4"} />
                <p className="text-sm leading-4 select-none">{comment}</p>
              </div>
            }

          </div>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-3 gap-3">
        {
          schoolsData.map((cardData, i) =>
            <SchoolCard key={`card-schools-${i}`} cardData={cardData} />
          )
        }
      </div>


    )
  }

  function SecondGridList() {
    return (
      <div className="flex flex-col gap-4 max-w-[292px] w-full min-h-500px text-white uppercase font-bold">
        <div className="flex p-6 bg-sky-500 rounded-md">
          <div>Personīgi visaugstāk vērtētie apgūtie kursi:</div>
        </div>
        <div className="flex p-6 bg-purple-600 rounded-md">
          <div>{`Risinājumu algoritmizēšana (RTU) un Programmēšana I (Alberta koledža)`}</div>
        </div>
        <div className="flex p-6 bg-purple-600 rounded-md">
          <div>{`Pieaugušo izglītība ("LSPA, 1. kurss")`}</div>
        </div>
        <div className="flex p-6 bg-purple-600 rounded-md">
          <div>{`Tautas, sporta dejas (LSPA 4. kurss)`}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col p-4">
      <div className="w-fit">
        <div className={`${darkMode ? "text-neutral-200" : "text-neutral-600"} uppercase mt-8 pb-[2px] font-semibold text-xl`}>Izglītība</div>
        <div className="border-b-[4px] border-b-sky-500 w-1/2 mb-8"></div>
      </div>
      <div className="flex gap-8">
        <GridList />
        <SecondGridList />
      </div>
    </div>
  )
}


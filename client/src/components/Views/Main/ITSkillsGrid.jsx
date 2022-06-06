import { useEffect, useState, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCheck, faTimes, faCalendarAlt, faPlus } from "@fortawesome/free-solid-svg-icons";


const ITSkillsData = [
  {
    name: "Web programmēšana",
    items: [
      {
        name: "Frontends",
        items: [
          { name: "React" },
          { name: "Tailwind CSS" },
          { name: "" },
        ]
      },
      {
        name: "Bekends",
        items: [
          { name: "MongoDB (NoSQL)" },
          { name: "Mongoose (GridFSBucket file streaming, models)" },
          { name: "NodeJS: Express, MVC sistēma" },
          { name: "HEROKU" },
          { name: "REST, Postman" },
          { name: "JWT httpOnly autorizācija" },
          { name: "Cookies" },
          { name: "GridFSBucket" },
          { name: "EmailJS" },
        ]
      }
    ]
  },
  {
    name: "Lietišķu aplikāciju pielitošana",
    items: [
      { name: "Microsoft office" },
      { name: "Google drive" },
      { name: "Google docs" },
    ]
  },
  {
    name: "Lietojumprogrammu programmēšana",
    items: [
      {
        name: "c++",
        items: [
          { name: "Automatizetāji, autoklikeri ar <windows.h>" },
          { name: "Datorspēļu programmēšana ar SFML un OpenGL pamatiem" },
          { name: "Vispārējas zināšanas c++ pamatos (OOP pamatprincipi)" },
        ]
      },
      {
        name: "VBA",
        items: [
          { name: "Manipulācijas ar makro" },
          { name: "Rēķinu (u. tml. failu) automatizēta populācija" },
        ]
      },
      {
        name: "Matemātiskās statistikas aprēķināšanas programmas",
        items: [
          { name: "R" },
          { name: "SPSS" },
        ]
      }
    ]
  },

]

export default function ITSkillsGrid() {

  return (
    <>
      <div className="w-fit mt-8">
        <div className="text-neutral-600 uppercase mt-8 pb-[2px] font-semibold text-xl">IT prasmes</div>
        <div className="border-b-[4px] border-b-sky-500 w-1/2 mb-8"></div>
      </div>

      <div className="mr-auto text-lg">
        <div className="text-slate-800 flex flex-col">
          {
            ITSkillsData.length > 0 &&
            ITSkillsData.map(({ name, items }, i) =>
              <div key={`cell-lvl-0-${i}`}>
                {/* //1st level */}
                <div className="p-4">
                  <div className="table-row items-center">
                    <p className="text-sky-500 font-bold uppercase leading-8">
                      {name}
                    </p>
                  </div>
                  {
                    typeof (items) !== undefined &&
                    items.map(({ name, items }, j) => {
                      return (
                        <div className="pl-4">
                          <div className="text-purple-600 font-semibold">
                            {name}
                          </div>
                          {
                            items !== undefined &&
                            items.map(({ name, items }) => {
                              return (
                                <div className="pl-4 flex flex-col">
                                  <div className="text-neutral-700 text-base italic">
                                    {name}
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )

          }

        </div>
      </div>
    </>
  )
}

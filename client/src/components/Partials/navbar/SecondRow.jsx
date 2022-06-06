import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhoneAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import { faReact } from '@fortawesome/free-brands-svg-icons'

export default function SecondRow() {
  const contactOptionData = [
    { icon: faCog, topName: "šīs lapas e-pasts", bottomName: "martins.sturainis.html @gmail.com" },
    { icon: faMailBulk, topName: "personīgais e-pasts", bottomName: "martins.sturainis.lspa @gmail.com" },
    { icon: faPhoneAlt, topName: "tālrunis", bottomName: "+371 28 924 782" }
  ]

  function ContactOption({ icon, topName, bottomName, index, maxIndex }) {
    const [hovering, setHovering] = useState(false);

    return (
      <div className="my-auto">
        <div
          className={
            `${index + 1 !== maxIndex && "border-r border-r-neutral-300 pr-2"} 
            flex gap-3 items-center max-w-[250px] cursor-pointer`}
          onMouseEnter={() => { setHovering(true) }}
          onMouseLeave={() => { setHovering(false) }}
        >
          <div className={
            `flex justify-center items-center duration-200 ease-in-out border rounded-lg p-2
            ${hovering ? "border-purple-600" : "border-sky-500"}`}
          >
            <FontAwesomeIcon
              icon={icon}
              className={
                `duration-200 ease-in-out
                ${hovering ? "text-purple-600" : "text-sky-500"} w-7 h-7`}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-neutral-400 text-sm">
              {topName}
            </p>
            <p className={
              `font-extrabold duration-200 ease-in-out
              ${hovering ? "text-purple-600" : "text-sky-500"} 
              ${topName.includes("e-pasts") ? "text-md leading-4" : "text-xl"}`}
            >
              {bottomName}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-[122px] max-w-xl w-full mx-auto justify-between gap-10 py-2">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faReact} className={"react-logo text-sky-400 w-full h-full"}/>
        <div className="text-sky-400 text-base uppercase leading-4 font-extrabold">Lapa veidota izmantojot React</div>
      </div>
      <div className="flex w-full gap-4 justify-end">
        {
          contactOptionData.map(({ icon, topName, bottomName }, i) =>
            <ContactOption
              key={`contact-option-${i}`}
              icon={icon} topName={topName} bottomName={bottomName}
              index={i} maxIndex={contactOptionData.length}
            />
          )
        }
      </div>

    </div>
  )
}
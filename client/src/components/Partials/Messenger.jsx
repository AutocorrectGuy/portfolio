import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faChevronDown, faCheckCircle, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import MessengerModal from "./utils/MessengerModal";

export default function Messenger() {
  const [emailValue, setEmailValue] = useState("");
  const [blueMessage, setBlueMessage] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteMessenger, setDeleteMessenger] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef(null);
  const scrollableDiv = useRef(null);

  useEffect(() => {
    scrollableDiv.current !== null &&
      scrollableDiv.current.scrollTo({
        top: 99999,
        left: 0,
        behavior: 'smooth'
      });
    setMessageValue("");
  }, [blueMessage])

  function askForEmail(e) {
    e.preventDefault();
    setOpenModal(true)
  }

  return (
    <div className={`${open ? "bottom-0" : "bottom-10"} fixed right-10 rounded-l-full rounded-br-full`}
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}
    >
      {
        (!open && !deleteMessenger) &&
        <FontAwesomeIcon
          icon={faTelegram}
          className={"p-1 w-12 h-12 mt-2 mr-2 rounded-full bg-sky-500 text-white cursor-pointer"}
          onClick={() => { setOpen(true) }}
          onChange={() => { }}
        />
      }

      {
        (!open && hover && !deleteMessenger) &&
        <FontAwesomeIcon
          icon={faTimes}
          className={"absolute top-0 right-0 w-3 h-3 p-1 rounded-full bg-red-400 text-white cursor-pointer"}
          onClick={() => { setDeleteMessenger(true) }}
        />
      }

      {
        open &&
        <form className="flex-grow flex flex-row bg-white min-h-[450px] shadow-md shadow-neutral-200"
          onSubmit={(e) => { askForEmail(e) }}
        >
          <section className="flex flex-col flex-auto border-l border-neutral-200">
            <div className="flex justify-between chat-header h-12 flex-row flex-none items-center shadow-md shadow-neutral-100">
              <div className="flex items-center h-full w-fit">
                <img src="https://avatars.githubusercontent.com/u/71926334?v=4" className="rounded-full h-full w-fit p-2" />
                <div className="flex gap-2 items-center">
                  <p>Mārtiņš</p>
                  <FontAwesomeIcon icon={faCheckCircle} className={"w-3 h-3 text-blue-500"} />
                  <FontAwesomeIcon icon={faChevronDown} className={"w-3 h-3 text-neutral-400"} />
                </div>
              </div>
              <div className="flex items-center pr-1 cursor-pointer"
                onClick={() => { setOpen(false) }}>
                <div className="flex items-center justify-center w-7 h-7 hover:bg-neutral-100 rounded-full">
                  <FontAwesomeIcon icon={faWindowMinimize} className={"w-5 h-5 text-neutral-300 -translate-y-2"} />
                </div>
                <div className="flex items-center justify-center  w-7 h-7 hover:bg-neutral-100 rounded-full cursor-pointer"
                  onClick={() => { setDeleteMessenger(true) }}
                >
                  <FontAwesomeIcon icon={faTimes} className={"w-5 h-5 text-neutral-300"} />
                </div>
              </div>
            </div>
            <div className="chat-body flex flex-row items-end p-4 flex-1 overflow-y-scroll w-full h-[400px]"
              ref={scrollableDiv}>
              <div className="flex flex-row w-full max-h-[400px]">
                <div className="messages text-sm text-white grid grid-flow-row gap-2 w-full">
                  {
                    blueMessage.length > 0 &&
                    blueMessage.map((item, i) =>
                      <div key={`message-${i}`} className={`${i % 2 === 0 ? "ml-auto" : "mr-auto"} max-w-[250px] flex-row-reverse flex items-center group`}>
                        <p className={`${i % 2 === 0 ? "rounded-l-3xl" : "rounded-r-3xl"} 
                            px-6 py-3 rounded-b-3xl bg-blue-700 max-w-xs lg:max-w-md`}>{item}</p>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="chat-footer flex-none">
              <div className="flex flex-row items-center p-4 gap-2">
                <div className="relative flex-grow">
                  <input className="rounded-full py-2 pl-3 h-10 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                    type="text" value={messageValue} placeholder="Aa"
                    onChange={(e) => {
                      setMessageValue(e.target.value)
                    }} />
                </div>
                <button type="submit" className="flex items-center justify-center flex-shrink-0 focus:outline-none mx-2 text-blue-600 hover:text-blue-700 w-6 h-6">
                  <FontAwesomeIcon icon={faTelegram} className={"w-9 h-9 text-blue-600"} />
                </button>
              </div>
            </div>
          </section>
        </form>
      }
      {
        openModal &&
        <MessengerModal
          setModalOpen={setOpenModal}
          message={messageValue}
          setBlueMessage={setBlueMessage}
          oldBlueMessages={blueMessage}
          scrollableDiv={scrollableDiv}
        />
      }
    </div>

  )
}





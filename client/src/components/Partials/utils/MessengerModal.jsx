import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function MessengerModal({setModalOpen, message, setBlueMessage, oldBlueMessages, scrollableDiv }) {

  const [inputValue, setInputValue] = useState("");
  const formRef = useRef(null);
  
  function sendEmail(e) {
    e.preventDefault();
    // save this in process.env file
    setModalOpen(false);
    emailjs.sendForm('service_apcyl7f', 'template_tmm391v', formRef.current, "mOgcgz8oY9wm1WpKz")
      .then(function (response) {
        toast(`Message sent succesfully!`, {})
        setBlueMessage(() => [...oldBlueMessages, message]);
      }, function (err) {
        console.log(err);
        toast(`Something went wrong when sending the message!`, {})
      });
  }

  return(
  <div>
    <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center bg-black bg-opacity-90 z-20"
      onClick={() => setModalOpen(false)}>
    </div>
    <div className="fixed right-1/2 translate-x-1/2 top-6 flex flex-col p-10 bg-neutral-700 text-white rounded-sm shadow-lg shadow-neutral-900 max-w-[450px] w-full z-20">
      <div className="pb-10 pt-5 text-3xl font-bold border-b border-b-neutral-600">{`Ziņojuma nosūtīšana`}</div>
      <div className="flex flex-col py-10 border-b border-b-neutral-600">
        <div className="mb-3">
          <label className="leading-5 text-sm text-neutral-200 font-normal float-left">{`Ja vēlaties Mārtiņam nosūtīt ziņu`}&nbsp;</label>
          <label className="leading-5 text-sm text-white font-bold float-left cursor-text">{`"${message}", `}&nbsp;</label>
          <label className="leading-5 text-sm text-neutral-200 font-normal float-left">{`norādiet epastu, lai viņam būtu Jums iespēja atbildēt.`}</label>
        </div>
        <input 
          autoFocus={true}
          type="text" 
          placeholder={`Jūsu epasts`}
          className="bg-neutral-600 text-white text-sm placeholder:text-neutral-400 p-2 rounded-sm"
          onChange={(e) => setInputValue(e.target.value)}
          ></input>
      </div>
      <div className="flex items-center justify-end gap-3 mt-10">
        <button className="flex py-2 px-4 rounded-sm select-none text-white cursor-pointer bg-neutral-500 shadow-sm shadow-neutral-800 active:translate-y-px"
          onClick={() => setModalOpen(false)}
        >
          Atcelt
        </button>
        <button className={`${(message.length > 0 && inputValue.includes("@")) ? "bg-sky-600 hover:bg-sky-500 shadow-sm shadow-neutral-800 active:translate-y-px cursor-pointer" 
          : "bg-neutral-600 cursor-not-allowed pointer-events-none "}
          flex py-2 px-4 rounded-sm select-none text-white`}
          onClick={(e) => {sendEmail(e)}}
        >Nosūtīt</button>
      </div>
      
    </div>
    <form className="hidden" ref={formRef}>
      <input type="text" name="message" value={message} placeholder={message} onChange={() => {}}></input>
      <input type="text" name="email" value={inputValue} placeholder={inputValue} onChange={() => {}}></input>
    </form>

  </div>);
}
import axios from "axios";
import { useEffect, useContext } from "react";
import Footer from "../../Partials/Footer";
import NavTopComponent from "../../Partials/navbar/NavTopComponent";
import MainBody from "./MainBody";
import Messenger from "../../Partials/Messenger";
import bgImage from "../../../assets/pattern2.png"
import StatesContext from "../../../context/StatesContext";


export default function MainComponent() {
  
  const { mode: { darkMode } } = useContext(StatesContext);
  useEffect(() => {
    process.env.REACT_APP_NODE_ENV === 'development' &&
    (axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL)
    // fetch data from db
  }, []);
  
  return (
    <div className={`${darkMode ? "bg-neutral-900" : "bg-white"} 
    relative flex flex-col w-full min-h-screen ml-auto bg-left-top`}
    >
      <div className="absolute w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPositionX: "50%",
          backgroundRepeat: "repeat",
          opacity: `${darkMode ? "2%" : "100%"}`
        }}
        ></div>
      <div className="z-10 flex flex-col w-full">
        <NavTopComponent />
        <MainBody />
        <Footer />
        <Messenger />
      </div>

    </div>
  )
}
// background image generated from: 
//https://pattern.monster/hexagon-5/
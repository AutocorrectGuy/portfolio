import axios from "axios";
import { useEffect, useState, useRef, useContext } from "react";
import Footer from "../../Partials/Footer";
import NavTopComponent from "../../Partials/navbar/NavTopComponent";
import MainBody from "./MainBody";
import Messenger from "../../Partials/Messenger";
//https://pattern.monster/hexagon-5/
import bgImage from "../../../assets/pattern2.png"

export default function MainComponent() {
  useEffect(() => {
    process.env.REACT_APP_NODE_ENV === 'development' &&
      (axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL)
    // fetch data from db
  }, []);



  return (
    <div className="flex flex-col w-full min-h-screen ml-auto bg-left-top"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPositionX: "50%",
        backgroundRepeat: "repeat"
      }}
    >
      <NavTopComponent />
      <MainBody />
      <Footer />
      <Messenger />
    </div>
  )
}
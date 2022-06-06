import axios from "axios";
import { useEffect, useState, useRef, useContext } from "react";
import Footer from "../../Partials/Footer";
import NavTopComponent from "../../Partials/navbar/NavTopComponent";
import MainBody from "./MainBody";


export default function MainComponent() {
  useEffect(() => {
    process.env.REACT_APP_NODE_ENV === 'development' &&
      (axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL)
    // fetch data from db
  }, []);



  return (
    <div className="flex flex-col w-full min-h-screen ml-auto bg-left-top"
      style={{
        backgroundImage: "url(https://barkava.jak.lv/site/assets/images/jak_bg_triangle.png)",
        backgroundPositionX: "50%",
        backgroundRepeat: "repeat"
      }}
    >
      <NavTopComponent />
      <MainBody />
      <Footer />
    </div>
  )
}
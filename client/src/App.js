import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MainComponent from "./components/Views/Main/MainComponent";
import StatesContext from "./context/StatesContext";
import { useCookies } from "react-cookie"

function App() {
  const [cookie, setCookie, removeCookie] = useCookies(['context-cookie']);

  const [darkMode, setDarkMode] = useState(true);

  const defaultValue = {
    // messengerOn: true,
    // messagesList: ["message1","message2", "message3"],
    mode: {
      darkMode: darkMode, 
      setDarkMode: setDarkMode,
      sss:"asdasd"
    },
    // updateCookie: function (parameter, newValue) {
    //   let newCookie = cookie["context-cookie"];
    //   newCookie[parameter] = newValue;
    //   setCookie("context-cookie", newCookie)
    //   console.log("cookie updated!")
    //   return 0;
    // }
  }

  // useEffect(() => {
  //   !cookie.hasOwnProperty("context-cookie")
  //     && setCookie("context-cookie", defaultValue)
  // }, [])

  return (
    <div className="flex min-h-full">
      <StatesContext.Provider value={defaultValue}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Router>
            <Routes>
              <Route path="/" element={<MainComponent />} />
            </Routes>
          </Router>
        </SkeletonTheme>
      </StatesContext.Provider>
    </div>
  );
}

export default App; 
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MainComponent from "./components/Views/Main/MainComponent";

function App() {
  const [userContextData, setUserContextData] = useState([]);
  const value = { userContextData, setUserContextData };

  return (
    <div className="flex min-h-full">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router>
          <Routes>
            <Route path="/" element={<MainComponent />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App; 
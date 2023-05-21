import React from 'react'
import {Route, Routes} from "react-router-dom"
import SOON from "../SOON";
import App from "../App"


const CustomRoutes = () => {
  return (
    <Routes>
    <Route path="/soon" element={<App/>} />
    <Route path="/" element={<SOON />} />
    </Routes>

  )
}

export default CustomRoutes
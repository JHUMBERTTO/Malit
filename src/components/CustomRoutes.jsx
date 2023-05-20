import React from 'react'
import {Route, Routes} from "react-router-dom"
import SOON from "../SOON";
import App from "../App"


const CustomRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/soon" element={<SOON />} />
    </Routes>

  )
}

export default CustomRoutes
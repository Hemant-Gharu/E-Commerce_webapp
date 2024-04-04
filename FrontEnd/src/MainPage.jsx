import React,{useState} from "react";
import {Link, Route, Routes, Router} from "react-router-dom";
import mypic from "./assets/homepage.jpg"

const MainPage = ()=>{
    return(
        <div>
            <center>
                <img src={mypic} height={200} width={800} />
            </center>
            <center>
                <nav>
                    <Link to="/customermain">Customer</Link><span></span>
                    <Link to="/vendermain">Vender</Link><span></span>
                </nav>
            </center>
            <center>
                {/* <Router path="/customermain" element={} /> */}
            </center>
        </div>
    )
}
export default MainPage;
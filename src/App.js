import './App.css'
import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Start from "./components/start"
import Home from "./Home"


export default function App(){
    return(
        <div>
            <BrowserRouter>
              <Routes>
                 <Route path='/' element={<Start />} />
                    <Route path='/start' element={<Home />} />
              </Routes>
            </BrowserRouter>
        </div>
    )
}
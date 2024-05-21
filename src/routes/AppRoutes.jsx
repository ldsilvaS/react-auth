import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

function AppRoutes() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default AppRoutes;
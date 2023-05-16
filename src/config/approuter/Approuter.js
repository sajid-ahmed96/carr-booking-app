import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from "../../screens/login";
import Signup from "../../screens/signup";
import Home from "../../screens/home";
import Cardetail from "../../screens/cardetail";

export default function Approuter() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />}/>
            <Route path="signin" element={<Signup />}/>
            <Route path="home" element={<Home />}/>
            <Route path="cardetail" element={<Cardetail />}/>
        </Routes>
    </BrowserRouter>
    )
}
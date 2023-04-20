import Homenav from "../home-nav/homenav";
// import HomeNavLogin from "../home-nav-login/homenavlogin";
import MainNav from "../main-nav/mainnav";
import { useState } from "react";


export default function Layout({ children }) {
    // TODO : Add logic to check and display valid navbar
    // const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            <Homenav />
            {children}
        </>
    )
}
import HomeNavNotLogin from "../home-nav-notlogin/homenavnotlogin";
import HomeNavLogin from "../home-nav-login/homenavlogin";
import { useState } from "react";


export default function Layout({ children }) {
    return (
        <>
            <HomeNavNotLogin />
            {children}
        </>
    )
}
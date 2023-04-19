import HomeNavNotLogin from "../home-nav-notlogin/homenavnotlogin";
import HomeNavLogin from "../home-nav-login/homenavlogin";
import { useState } from "react";


export default function Layout({ children }) {
    const [isLogin, setIsLogin] = useState(true)

    let navbarLayout

    if (!isLogin) {
        navbarLayout = (
            <>
                <HomeNavNotLogin />
                {children}
            </>
        )
    } if (isLogin) {
        navbarLayout = (
            <>
                <HomeNavLogin />
                {children}
            </>
        )
    }

    return (
        <>
            {navbarLayout}
        </>
    )
}
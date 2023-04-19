import image from "../../assets/navbar/head-logoSmall.png"
import "./homenavnotlogin.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function HomeNavNotLogin() {
    //if dropdown === true, dropdown-menu will appear
    const [dropdown, setDropdown] = useState(false)

    return (
        <nav className="homeNav">
            <div className="logo-container">
                <img src={image} alt="Orange-cat's logo" />
                <span><a href="#">Orange Cat</a></span>
            </div>

            <ul className="nav">
                <li><a href="#features">Features</a></li>
                <li><a href="#bmi">BMI</a></li>
                <li><a href="#how">How it Work</a></li>
            </ul>

            <div className="login-container">
                <a href="#">Login</a>
                <a href="#">Sign-up</a>
            </div>

            <span className="dropdown-btn">
                {/* toggle dropdown-menu */}
                <FontAwesomeIcon onClick={() => setDropdown(!dropdown)} icon={faBars} size="xl"/>
            </span>

            {dropdown && <ul className="dropdown-menu">
                <li><div className="arrow-up"></div></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">BMI</a></li>
                <li><a href="#">How it Work</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign-up</a></li>
            </ul>}
        </nav>
    )
}
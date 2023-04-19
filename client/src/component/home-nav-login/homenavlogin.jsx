import image from "../../assets/navbar/head-logoSmall.png"
import "./homenavlogin.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function HomeNavLogin() {
    //if dropdown === true, dropdown-menu will appear
    const [dropdown, setDropdown] = useState(false)

    return (
        <nav className="homeNav">
            <div className="logo-container">
                <img src={image} alt="Orange-cat's logo" />
                <span>Orange Cat</span>
            </div>

            <ul className="nav">
                <li><a href="#features">Features</a></li>
                <li><a href="#bmi">BMI</a></li>
                <li><a href="#how">How it Work</a></li>
            </ul>

            <div className="profile-container">
                <div className="profile-image">
                    <img src={image} alt="Orange-cat's logo" />
                </div>
                <span onClick={() => setDropdown(!dropdown)} className="profile-username">USERNAME01</span>
            </div>

            <span className="dropdown-btn">
                {/* toggle dropdown-menu */}
                <FontAwesomeIcon onClick={() => setDropdown(!dropdown)} icon={faBars} size="xl"/>
            </span>

            {dropdown && <ul className="dropdown-menu">
                <li><div className="arrow-up"></div></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">BMI</a></li>
                <li><a href="#">How it Work</a></li>
                <li><a href="#">Logout</a></li>
            </ul>}
        </nav>
    )
}
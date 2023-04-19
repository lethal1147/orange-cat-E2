import image from "../../assets/navbar/head-logoSmall.png"
import "./mainnav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function MainNav() {
    //if dropdown === true, dropdown-menu will appear
    const [dropdown, setDropdown] = useState(false)

    return (
        <nav className="homeNav">
            <div className="logo-container">
                <img src={image} alt="Orange-cat's logo" />
                <span><a href="#">Orange Cat</a></span>
            </div>

            <div className="profile-container">
                <div className="profile-image">
                    <img src={image} alt="Orange-cat's logo" />
                </div>
                <span onClick={() => setDropdown(!dropdown)} className="profile-username"><a>USERNAME01</a></span>
            </div>

            <span className="dropdown-btn">
                {/* toggle dropdown-menu */}
                <FontAwesomeIcon onClick={() => setDropdown(!dropdown)} icon={faBars} size="xl"/>
            </span>

            {dropdown && <ul className="dropdown-menu">
                <li><div className="arrow-up"></div></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Logout</a></li>
            </ul>}
        </nav>
    )
}
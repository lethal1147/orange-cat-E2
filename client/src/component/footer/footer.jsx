import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord,faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <h4>CONTACT</h4>
                <span>02-222-2222</span>
                <span>contact@orangecat.com</span>
            </div>
            <div className="footer-social">
                <h4>&copy; Orange Cat</h4>
                <ul className="footer-social-icon">
                    <li><a target="_blank" href="https://discord.com/"><FontAwesomeIcon size="xl" icon={faDiscord} /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon size="xl" icon={faFacebook} /></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon size="xl" icon={faInstagram} /></a></li>
                    <li><a target="_blank" href="https://twitter.com/"><FontAwesomeIcon size="xl" icon={faTwitter} /></a></li>
                </ul>
            </div>
        </footer>
    )
}
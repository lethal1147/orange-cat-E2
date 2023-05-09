import './SocialMedia.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'

function SocialMedia () {


    return (
        <>
            <ul className="socialmedia-icon">
                <li><a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon size="xl" icon={faFacebook} /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon size="xl" icon={faInstagram} /></a></li>
                <li><a target="_blank" href="https://twitter.com/"><FontAwesomeIcon size="xl" icon={faTwitter} /></a></li>
            </ul>
        </>
    )
}

export default SocialMedia;
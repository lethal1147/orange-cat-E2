import LoginBox from "../../component/LoginBox/LoginBox";
import Cat from "../../assets/images/muscleCat/hero-img.png";
import "./login.css";

export default function Login() {
    return (
        <>
            <h2>Login Page</h2>
            <div className="login-page">
                <LoginBox className="login-box" />
                <img className="login-image" src={Cat} alt="Muscular Orange Cat" />
            </div>
        </>
    );
}
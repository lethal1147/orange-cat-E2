import { useEffect } from "react";
import RegisterBox from "../../component/RegisterBox/RegisterBox";
import Cat from "../../assets/images/muscleCat/hero-img.png";
import "./register.css";

export default function Register() {
    useEffect(() => {
        document.body.classList.add('register-body');
        return () => {
            document.body.classList.remove('register-body');
        };
    }, []);

    return (
        <>
            <h2>Register Page</h2>
            <div className="register-page">
                <RegisterBox className="register-box" />
                <img className="register-image" src={Cat} alt="Muscular Orange Cat" />
            </div>
        </>
    );
}
import { useEffect } from "react";
import LoginBox from "../../component/LoginBox/LoginBox";
import Cat from "../../assets/images/muscleCat/hero-img.png";
import "./login.css";
import Layout from "../../component/layout/layout";

export default function Login() {
    useEffect(() => {
        document.body.classList.add('login-body');
        return () => {
            document.body.classList.remove('login-body');
        };
    }, []);

    return (
        <Layout>
            <div className="login-page">
                <LoginBox className="login-box" />
                <img className="login-image" src={Cat} alt="Muscular Orange Cat" />
            </div>
        </Layout>
    );
}
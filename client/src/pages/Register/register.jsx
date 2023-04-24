import { useEffect } from "react";
import RegisterBox from "../../component/RegisterBox/RegisterBox";
import Cat from "../../assets/images/muscleCat/hero-img.png";
import "./register.css";
import Layout from "../../component/layout/layout";

export default function Register() {
    useEffect(() => {
        document.body.classList.add('register-body');
        return () => {
            document.body.classList.remove('register-body');
        };
    }, []);

    return (
        <Layout>
            <div className="register-page">
                <RegisterBox className="register-box" />
                <img className="register-image" src={Cat} alt="Muscular Orange Cat" />
            </div>
        </Layout>
    );
}
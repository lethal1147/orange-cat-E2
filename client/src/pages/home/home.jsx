import "./home.css"
import { useState } from 'react'
import Layout from "../../component/layout/layout"
import HomeHero from "../../component/homepageSection/herosection/homehero"
import HomeFeatures from "../../component/homepageSection/featuressection/homefeatures"
import Homebmi from "../../component/homepageSection/bmisection/homebmi"
import Homehow from "../../component/homepageSection/howsection/homehow"
import Footer from "../../component/footer/footer"

export default function Home() {
    const [bmiInput, setBmiInput] = useState({
        height: '',
        weight: '',
        bmi: 'Your BMI!',
        shape: 'strong',
    })

    function handlerBmiInput(e) {
        const { name, value} = e.target
        setBmiInput({...bmiInput,[name]: value})
    }

    function calcBmi(e) {
        e.preventDefault()
        let height = bmiInput.height;
        let weight = bmiInput.weight;
        let bmiResult = (+weight/((+height/100) **2 )).toFixed(2);
        let bmiState = bmiResult < 18.50 ? 'under' : bmiResult >= 18.50 && bmiResult < 25 ? 'strong' : 'over'
        console.log(bmiState)
        setBmiInput({...bmiInput,bmi: bmiResult,shape: bmiState})
    }

    return (
        <Layout>
                <HomeHero bmiInput={bmiInput} />
                <HomeFeatures />
                <Homebmi onClick={calcBmi} onChange={handlerBmiInput} bmiInput={bmiInput}/>
                <Homehow />
                <Footer />
        </Layout>
    )
}
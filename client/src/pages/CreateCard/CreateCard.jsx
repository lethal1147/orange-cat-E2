import './CreateCard.css'
import { useState } from 'react'
import Layout from "../../component/layout/layout"
import PrevCard from "../../component/createCard-prevCard/PrevCard"


function CreateCard () {
    
    
    return (
        <Layout>
        
        <div className='bg'>
            <div className='container'>
                <div className='head-sentence'>
                    <h1 className='firsttopic'>Create Your Awesome Card</h1>
                    <h2 className='secondtopic'>Did You Meow Today</h2>
                    <h3 className='thirdtopic'>Today's Workout</h3>
                </div>
                <PrevCard />
                
            </div>


        </div>
        
        </Layout>
    )
}

export default CreateCard
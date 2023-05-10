// import './EditCard.css';
import { useState } from 'react';
import Layout from "../../component/layout/layout"
import SideContainer from '../../component/editCard-sideContainer/SideContainer'
import PrevCard from "../../component/createCard-prevCard/PrevCard"
import Form from '../../component/createCard-form/Form'

function EditCard () {


    return (
        <Layout>    
            <div className='create-card-container'>
                <div className='bg'>
                    <SideContainer />
                    <div className='container'>
                        <div className='head-sentence'>
                            <h1 className='firsttopic'>Edit Your Awesome Card</h1>
                            <h2 className='secondtopic'>Did You Meow Today?</h2>
                            <h3 className='thirdtopic'>Today's Workout</h3>
                        </div>
                        {/* <PrevCard  />
                        <Form  /> */}
                        
                    </div>
                </div>
            </div>
        </Layout>
        
    )
}

export default EditCard
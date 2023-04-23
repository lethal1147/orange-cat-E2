import './CreateCard.css'
import Layout from "../../component/layout/layout"
import PrevCard from "../../component/createCard-prevCard/PrevCard"
import caiBiceps from "../../assets/images/CreateCard/catBiceps.png"

function CreateCard () {
    
    
    return (
        <Layout>
        
        <div className='bg'>
            <div className='sideContainer'>
                <div className='sideText'>
                    <h1>Be The <br /> <span className='yellowText'>STRONGEST</span> Cat</h1>
                </div>
                <img src={caiBiceps} className='sideIMG'></img>
            </div>
            <div className='container'>
                <div className='head-sentence'>
                    <h1 className='firsttopic'>Create Your Awesome Card</h1>
                    <h2 className='secondtopic'>Did You Meow Today?</h2>
                    <h3 className='thirdtopic'>Today's Workout</h3>
                </div>
                <PrevCard />
                
            </div>


        </div>
        
        </Layout>
    )
}

export default CreateCard
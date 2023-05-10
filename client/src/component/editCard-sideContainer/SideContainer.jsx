import './SideContainer.css';
import caiBiceps from "../../assets/images/CreateCard/catBiceps.png"

function SideContainer () {


    return (
        <div className='sideContainer'>
            <div className='sideText'>
                <h1 className='greyText'>Be The <br /> <span className='orangeText'>STRONGEST</span> Cat!!!</h1>
            </div>
            <img src={caiBiceps} className='sideIMG'></img>
        </div>
    )
}

export default SideContainer;
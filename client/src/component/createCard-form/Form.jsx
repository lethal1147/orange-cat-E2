import './Form.css'
import biking from '../../assets/images/CreateCard/biking.png';
import running from '../../assets/images/CreateCard/running.png';
import swimming from '../../assets/images/CreateCard/swimming.png';
import cardio from '../../assets/images/CreateCard/cardio.png';
import walking from '../../assets/images/CreateCard/walking.png';

function Form() {
    return (
        <form>
            <div className='title-date'>
                {/* Add data: Title  */}
                <label htmlFor='title'>TiTle:</label>
                <input type="text" placeholder="type anything" name="title" ></input>
                {/* Add data: Date */}
                <label htmlFor='date'>Date:</label>
                <input type="date" name="date" ></input>
            </div>
            {/* Add data: activity */}
            <div className='activity-container'>
                <p>Activity:</p>
                <div className='activity-list'>
                    <div className="tile"> 
                        <input type="radio" value="biking" name="type" id='biking' ></input>
                        <label htmlFor="biking" className='activity-label'>
                            <img src={biking} alt='biking' className='activity-image'/>
                            <h6>Biking</h6>
                        </label>
                    </div>
                    <div className="tile"> 
                        <input type="radio" value="running" name="type" id='running'  ></input>
                        <label htmlFor="running" className='activity-label'>
                            <img src={running} alt='running' className='activity-image'/>
                            <h6>running</h6>
                        </label>
                    </div>
                    <div className="tile"> 
                        <input type="radio" value="swimming" name="type" id='swimming'  ></input>
                        <label htmlFor="swimming" className='activity-label'>
                            <img src={swimming} alt='swimming' className='activity-image'/>
                            <h6>swimming</h6>
                        </label>
                    </div>
                    <div className="tile"> 
                        <input type="radio" value="cardio" name="type" id='cardio'  ></input>
                        <label htmlFor="cardio" className='activity-label'>
                            <img src={cardio} alt='cardio' className='activity-image'/>
                            <h6>cardio</h6>
                        </label>
                    </div>
                    <div className="tile"> 
                        <input type="radio" value="walking" name="type" id='walking' ></input>
                        <label htmlFor="walking" className='activity-label'>
                        <img src={walking} alt='walking' className='activity-image'/>
                            <h6>walking</h6>
                        </label>
                    </div>

                
                
                
                
                
                
                
                </div>
            </div>
            

            
        </form>
    )
}

export default Form
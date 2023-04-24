import './Form.css'
import biking from '../../assets/images/CreateCard/biking.png';
import running from '../../assets/images/CreateCard/running.png';
import swimming from '../../assets/images/CreateCard/swimming.png';
import cardio from '../../assets/images/CreateCard/cardio.png';
import walking from '../../assets/images/CreateCard/walking.png';

function Form( {handleChangeInput, calcDuration, changeColor}) {
    return (
        <form>
            <div className='title-date'>

                {/* Add data: Title  */}
                <label htmlFor='title'>TiTle:</label>
                <input type="text" placeholder="type your title" name="title" id='title' required onChange={handleChangeInput} ></input>

                {/* Add data: Date */}
                <label htmlFor='date'>Date:</label>
                <input type="date" name="date" id='date' onChange={handleChangeInput} required ></input>
            </div>

            {/* Add data: activity */}
            <div className='activity-container'>
                <p>Activity:</p>
                <div className='activity-list'>
                    <div className="tile"> 
                        <input type="radio" value="biking" name="type" id='biking' required onChange={handleChangeInput}></input>
                        <label htmlFor="biking" className='activity-label'>
                            <img src={biking} alt='biking' className='activity-image'/>
                            <h6>Biking</h6>
                        </label>
                    </div>
                    <div className="tile"> 
                        <input type="radio" value="running" name="type" id='running' onChange={handleChangeInput}></input>
                        <label htmlFor="running" className='activity-label'>
                            <img src={running} alt='running' className='activity-image'/>
                            <h6>running</h6>
                        </label>
                    </div>
                    <div className="tile"> 
                        <input type="radio" value="swimming" name="type" id='swimming' onChange={handleChangeInput}></input>
                        <label htmlFor="swimming" className='activity-label'>
                            <img src={swimming} alt='swimming' className='activity-image'/>
                            <h6>swimming</h6>
                        </label>
                    </div>
                    <div className="tile"> 
                        <input type="radio" value="cardio" name="type" id='cardio' onChange={handleChangeInput}></input>
                        <label htmlFor="cardio" className='activity-label'>
                            <img src={cardio} alt='cardio' className='activity-image'/>
                            <h6>cardio</h6>
                        </label>
                    </div>
                    <div className="tile"> 
                        <input type="radio" value="walking" name="type" id='walking' onChange={handleChangeInput}></input>
                        <label htmlFor="walking" className='activity-label'>
                        <img src={walking} alt='walking' className='activity-image'/>
                            <h6>walking</h6>
                        </label>
                    </div>
                </div>
            </div>

            {/* Add data: Duration */}
            <div className='time_duration'>
                <label htmlFor='time_start'>Time-Start:</label>
                <input type='time' className='time' name='time_start' onChange={handleChangeInput} required></input>
                <label htmlFor='time-end'className='time2'>Time-End:</label>
                <input type='time' className='time' name='time_end' onChange={handleChangeInput} required></input>
                <button type='button' onClick={calcDuration}>Duration</button>
            </div>

            {/* Add data: Task status */}
            <div className='taskStatus'>
                <p>Task Status:</p>
                <div className='wrapper'>
                    <input type='radio' value='complete' name='task' id='complete' onClick={(e)=>changeColor(e)} required></input>
                    <input type='radio' value='inProgress' name='task' id='inProgress' onClick={(e)=>changeColor(e)}></input>
                    <input type='radio' value='fail' name='task' id='fail' onClick={(e)=>changeColor(e)}></input>
                    <label htmlFor='complete' className='option option-1'>
                        <div className='dot dot-1'></div>
                        <span>Missison Complete</span>
                    </label>
                    <label htmlFor='inProgress' className='option option-2'>
                        <div className='dot dot-2'></div>
                        <span>In Progress</span>
                    </label>
                    <label htmlFor='fail' className='option option-3'>
                        <div className='dot dot-3'></div>
                        <span>Missison Failed</span>
                    </label>
                </div>
            </div> 

            {/* Add data: Caption */}
            <textarea id='textbox' placeholder='Add caption:' name='caption' onChange={handleChangeInput} required></textarea>

            {/* submit button */}
            <input type="submit" value="submit" id="btn-submit"></input>
        </form>
    )
}

export default Form
import './PrevCard.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import Form from '../createCard-form/Form'
import biking from '../../assets/images/CreateCard/biking.png';
import running from '../../assets/images/CreateCard/running.png';
import swimming from '../../assets/images/CreateCard/swimming.png';
import cardio from '../../assets/images/CreateCard/cardio.png';
import walking from '../../assets/images/CreateCard/walking.png';
import Uploader from '../createCard-Uploader/Uploader'


function PrevCard() {
    const [ inputs, setInputs] = useState ({
        title: 'This is title',
        caption: 'I wish I was a cat, no school, no work, no exercise, just meow meow meow meow meow',
        time_start: '',
        time_end: '',
        duration: '1 h 30 m',
        date: '2023-03-18',
        task: '',
        type: ''
    })

    function calcDuration () {
        let tStart = inputs.time_start;
        let tEnd = inputs.time_end;
        // console.log(tStart, tEnd);
    
        //convert timeStart and timeEnd to milliseconds
        let milliseconds1 = Number(tStart.split(':')[0]) * 60 * 60 * 1000 + Number(tStart.split(':')[1]) * 60 * 1000;
        let milliseconds2 = Number(tEnd.split(':')[0]) * 60 * 60 * 1000 + Number(tEnd.split(':')[1]) * 60 * 1000;
        // console.log(milliseconds1, milliseconds2);
    
        //find differences in milliseconds
        let difference = Math.abs(milliseconds2 - milliseconds1);
        if (milliseconds2 < milliseconds1) {
            difference = 86400000 - difference;
        }
        // console.log(difference)
    
        let msec = difference;
                let hh = Math.floor(msec / 1000 / 60 / 60);
                msec -= hh * 1000 * 60 * 60;
                //console.log('hh ' + hh);
                //console.log('hh ' + msec);
                let mm = Math.floor(msec / 1000 / 60);
                //console.log('mm1 ' + mm);
                msec -= mm * 1000 * 60;
                //console.log('mm2 ' + msec);
                let ss = Math.floor(msec / 1000);
                msec -= ss * 1000;
    
                // console.log(hh + ":" + mm + ":" + ss);
    
                //prepare to display in preview card
                let displayHour = hh + ' h';
                let displayMin = mm + ' m'
                // console.log(displayHour, displayMin)
    
                let hour;
                let min; 
                if (hh === 0) {
                    hour = '';
                    min = displayMin;
                } else if (mm === 0) {
                    hour = displayHour;
                    min = '';
                } else if (hh > 0 && mm > 0) {
                    hour = displayHour;
                    min = displayMin;
                } else {
                    hour = '0 h';
                    min = '0 m';
                }
                let calculateDuration = `${hour} ${min}`
                setInputs({...inputs,duration:calculateDuration})
        }

        let changeColor = (e) => {
            const color = ['#96d674', '#fff476', '#d67474']
            const { name, value } = e.target
            if (value == 'complete') {
                //console.log('you click green')
                setInputs({...inputs,[name]: color[0]})
            }
            if (value == 'inProgress') {
                //console.log('you click yellow')
                setInputs({...inputs,[name]: color[1]})
            }
            if (value == 'fail') {
                // console.log('you click red')
                setInputs({...inputs,[name]: color[2]})
            }
        }


    const handleChangeInput = (e) => {
        const { name, value } = e.target
        //console.log({...inputs})
        setInputs({...inputs,[name]: value})
        // console.log({...inputs})
    }

    // console.log(inputs)

    return (
        <>
            <div className='prevcard'>
                {/* preview Image */}
                <div className='prevImg'>
                    <Uploader />
                </div>
                

                {/* preview title */}
                <div className='container-text'>
                    <div className='prevTextbox'>
                        <p className='title-text'>{inputs.title}</p>
                    </div>
                    {/* edit and delete icon */}
                    <FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare' />
                    <FontAwesomeIcon icon={faTrashCan} className='faTrashCan' />

                    {/* preview caption */}
                    <div className='prevCaption'>
                        <p className='caption-text'>{inputs.caption}</p>
                    </div>

                    {/* preview date */}
                    <div className='prevDate'>
                        <p className='date-text'>{inputs.date}</p>
                    </div>
                    {/* date icon */}
                    <FontAwesomeIcon icon={faCalendar} className='faCalendar' />

                    {/* preview duration */}
                    <div className='prevDuration'>
                        {inputs.type === 'biking' && <img src={biking} className='icon-img'  />} 
                        {inputs.type === 'running' && <img src={running} className='icon-img'  />}
                        {inputs.type === 'swimming' && <img src={swimming} className='icon-img-swimming'  />}    
                        {inputs.type === 'cardio' && <img src={cardio} className='icon-img'  />}
                        {inputs.type === 'walking' && <img src={walking} className='icon-img'  />}
                        <p className='duration-text'>{inputs.duration}</p>
                    </div>
                </div>

                {/* preview task status */}
                <div className='previewStatus' style={{backgroundColor:inputs.task}}></div>
            </div>

            <Form handleChangeInput={handleChangeInput} calcDuration={calcDuration} changeColor={changeColor}  />
        </>
    )
}

export default PrevCard
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


function PrevCard() {
    const [ inputs, setInputs] = useState ({
        title: 'This is title',
        caption: 'I wish I was a cat, no school, no work, no exercise, just meow meow meow meow meow',
        time_start: '',
        time_end: '',
        duration: '',
        date: '2023-03-18',
        task: '',
        type: ''
    })

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        //console.log({...inputs})
        setInputs({...inputs,[name]: value})
        // console.log({...inputs})
    }

    return (
        <>
            <div className='prevcard'>
                <div className='prevImg'></div>

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
                        {inputs.type === 'swimming' && <img src={swimming} className='icon-img'  />}    
                        {inputs.type === 'cardio' && <img src={cardio} className='icon-img'  />}
                        {inputs.type === 'walking' && <img src={walking} className='icon-img'  />}
                        <p className='duration-text'>1h 30m</p>
                    </div>
                </div>

                {/* preview task status */}
                <div className='previewStatus'></div>
            </div>

            <Form handleChangeInput={handleChangeInput}  />
        </>
    )
}

export default PrevCard
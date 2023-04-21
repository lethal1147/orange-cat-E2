import './PrevCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import Form from '../createCard-form/Form'


function PrevCard() {

    return (
        <>
            <div className='prevcard'>
                <div className='prevImg'></div>

                <div className='container-text'>
                    <div className='prevTextbox'>
                        <p className='title-text'>This is title</p>
                    </div>
                    <FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare' />
                    <FontAwesomeIcon icon={faTrashCan} className='faTrashCan' />
                    <div className='prevCaption'>
                        <p className='caption-text'>Dear diary today I found an  orange cat while running. but, that's not enough. 
                        I still found a little black kitty. Luckily, I had pet's snack in my bag, so I fed them with my yummy yummy things.
                        Actually, I just wanted to do some exercise, but I adopted 2 cats instead. </p>
                    </div>
                    <div className='prevDate'>
                        <p className='date-text'>05 March 2023</p>
                    </div>
                    <FontAwesomeIcon icon={faCalendar} className='faCalendar' />
                    <div className='prevDuration'>
                        <p className='duration-text'>1h 30m</p>
                    </div>
                </div>

                <div className='previewStatus'></div>
            </div>

            <Form />
        </>
    )
}

export default PrevCard
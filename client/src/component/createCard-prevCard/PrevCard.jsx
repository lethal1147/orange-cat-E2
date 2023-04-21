import './PrevCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

function PrevCard() {

    return (
        <div className='prevcard'>
            <div className='prevImg'></div>

            <div className='container-text'>
                <div className='prevTextbox'></div>
                <FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare' />
                <FontAwesomeIcon icon={faTrashCan} className='faTrashCan' />
                <div className='prevCaption'></div>
                <div className='prevDate'></div>
                <FontAwesomeIcon icon={faCalendar} className='faCalendar' />
                <div className='prevDuration'></div>
            </div>

            <div className='previewStatus'></div>

        </div>
    )
}

export default PrevCard
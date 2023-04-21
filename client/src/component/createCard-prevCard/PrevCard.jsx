import './PrevCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

function PrevCard() {

    return (
        <div className='prevcard'>
            <div className='prevImg'></div>

            <div className='container-text'>
                <div className='prevTextbox'></div>
                <div className='prevCaption'></div>
                <div className='prevDate'></div>
                <FontAwesomeIcon icon={faCalendar} className='icon' />
                <div className='prevDuration'></div>
            </div>

            <div className='previewStatus'></div>

        </div>
    )
}

export default PrevCard
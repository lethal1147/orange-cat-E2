import './CallOut.css';
import { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
function CallOut () {

    const [ pickerVisible, setPickerVisible ] = useState(false);
    const [ currentEmoji, setCurrentEmoji ] = useState(null);
    const [ callOut, setCallout ] = useState('');

    const showPicker = () => {
        setPickerVisible(!pickerVisible);
    }

    const pickEmoji = (e) => {
        setCurrentEmoji(e.native);
        setPickerVisible(!pickerVisible);
    }

    const handleChangeCallOut = (e) => {
        const { name, value } = e.target
        //console.log({...callOut})
        setCallout({...callOut,[name]: value})
        // console.log({...callOut})
    }

    return (
        <main className='emojiContainer'>
            <div className='emoji-allcontainer'>
                <div className='emoji-subcontainer'>
                    <h3 className='displayEmoji'>{ currentEmoji }</h3> 
                    
                    <textarea className='textarea' name='callout' onChange={handleChangeCallOut} 
                    placeholder='Got a quote that inspires you to keep pushing? tell us here! ' ></textarea>
                </div>
                <FontAwesomeIcon icon={faFaceSmile} className='fa-facesmile' onClick={showPicker} />
                <div style={{display: pickerVisible ? 'block' : 'none'}} className='emoji-picker' >
                        <Picker 
                            data={data}
                            previewPosition = 'none'
                            onEmojiSelect = {pickEmoji}
                        />
                </div>
            </div>
            <div className='callout-line'></div>
        </main>
    )
}

export default CallOut;
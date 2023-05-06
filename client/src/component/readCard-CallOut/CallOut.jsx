import './CallOut.css';
import { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data'

function CallOut () {

    const [pickerVisible, setPickerVisible] = useState(false);
    const [currentEmoji, setCurrentEmoji] = useState(null);

    return (
        <main className='emojiContainer'>
            {/* <div className='emoji-subcontainer'>
                <h1 className='yes'>{ currentEmoji || `Yes` }</h1>
                <div className='emoji-box' onClick={() => setPickerVisible(!pickerVisible)}></div>
                <div className={pickerVisible ? 'd-block' : 'd-none'}>
                    <Picker 
                        data={data} 
                        previewPosition="none"
                        onEmojiSelect = {(e) => {
                            setCurrentEmoji(e.native);
                            setPickerVisible(!pickerVisible);
                        }}
                    />
                </div>
                <textarea className='textarea'></textarea>
            </div> */}

            
                <h1 className='yes'>{ currentEmoji || `Yes` }</h1>
                <button
                    className='btn btn-primary'
                    onClick={() => setPickerVisible(!pickerVisible)}
                >
                open emoji picker
                </button>
                <div style={{display: pickerVisible ? 'block' : 'none'}}>
                    <Picker 
                        data={data}
                        previewPosition = 'none'
                        onEmojiSelect = {(e) => {
                            setCurrentEmoji(e.native);
                            setPickerVisible(!pickerVisible);
                        }}
                    />

                </div>
                <textarea className='textarea'></textarea>
            

        </main>
    )
}

export default CallOut;
import './Uploader.css'
import { useState } from 'react'
import uploadIcon from '../../assets/images/CreateCard/uploadIcon.png';


function Uploader() {
    const [image, setImage] = useState(null);
    const [filename, setFilename] = useState('no selected file');

    return (
        <main>
            <form className='ImgForm'
            onClick={() => document.querySelector(".input-field").click()} >
                <input type="file" accept="image/*" className="input-field" hidden
                onChange={({ target: {files}}) => {
                    files[0] && setFilename(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL(files[0]))
                    }
                }} ></input>

                <img src={image} className="img-upload" />
                <label forhtml="file"><img src={uploadIcon} className="icon-upload" /></label>
                

                
            </form>
        </main>
    )
}

export default Uploader
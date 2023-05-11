import './Uploader.css'
import uploadIcon from '../../assets/images/CreateCard/uploadIcon.png';


function Uploader( { image, handleFileChange } ) {
    

    // console.log({image})

    return (
        <main className='upload-container'>
            <form className='ImgForm'
            onClick={() => document.querySelector(".input-field").click()}  >
                <input type="file" accept="image/*" className="input-field" hidden name='img' 
                onChange={handleFileChange} required ></input>

                <img src={image} className="img-upload" name='img' />
                <label forhtml="file" className="label-upload" ><img src={uploadIcon} className="icon-upload" /></label>
                <p>choose Image</p>
                

                
            </form>
        </main>
    )
}

export default Uploader
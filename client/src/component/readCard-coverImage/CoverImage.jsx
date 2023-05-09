import './CoverImage.css';

function CoverImage (props) {

    const { cover, getCover } = props;

    return (
        <main className="cover-container">
                <input type="file" accept="image/*" id="imgs" className="cover-input-field" name='coverimage' 
                    onChange={getCover} ></input>
                <img src={cover} className="cover-img-upload" />
                <div className='btn-changecover'>
                    <label className='click-here' htmlFor='imgs'>Change cover</label>
                </div>
            
        </main>
    )
}

export default CoverImage;
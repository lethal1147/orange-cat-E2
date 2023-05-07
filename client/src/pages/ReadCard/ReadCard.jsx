import './ReadCard.css';
import { useState } from 'react'
import Layout from "../../component/layout/layout";
import CoverImage from "../../component/readCard-coverImage/CoverImage";
import CallOut from "../../component/readCard-CallOut/CallOut";
import SocialMedia from '../../component/readCard-SocialMedia/SocialMedia';

function ReadCard () {
    const [image, setImage] = useState(null);
    const [filename, setFilename] = useState('no selected file');
    
    const getImage = ({ target: {files}}) => {
        files[0] && setFilename(files[0].name)
            if(files){
                setImage(URL.createObjectURL(files[0]))
            }
    };
    

    return (
        <Layout>
            <main className='bg-readcard'>
                <div className='r-coverimage'>
                    <CoverImage image={image} getImage={getImage} />
                </div>
                <div className='r-callout'>
                    <CallOut />
                </div>
                <div className='r-socialmedia'>
                    <SocialMedia />
                </div>
            </main>
            
        </Layout>
    )
}

export default ReadCard;
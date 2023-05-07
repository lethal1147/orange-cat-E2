import './ReadCard.css';
import { useState } from 'react'
import Layout from "../../component/layout/layout";
import CoverImage from "../../component/readCard-coverImage/CoverImage";
import CallOut from "../../component/readCard-CallOut/CallOut";
import SocialMedia from '../../component/readCard-SocialMedia/SocialMedia';
import PrevCard from "../../component/createCard-prevCard/PrevCard"

const cardDatas = [{
        id: 1,
        title: 'This is title',
        caption: 'I wish I was a cat, no school, no work, no exercise, just meow meow meow meow meow',
        duration: '1 h 30 m',
        date: '2023-03-18',
        task: '',
        type: ''
    },
    {
        id: 2,
        title: 'keep pushing yourself',
        caption: ' meow meow meow meow meow',
        duration: '2 h 10 m',
        date: '2023-04-17',
        task: '',
        type: ''
    },
    {
        id: 3,
        title: 'No time to sleep',
        caption: 'I eat, sleep, and run',
        duration: ' 30 m',
        date: '2023-03-16',
        task: '',
        type: ''
    },
    {
        id: 4,
        title: 'no title to display',
        caption: 'last test',
        duration: '1 h 48 m',
        date: '2023-03-07',
        task: '',
        type: ''
    }
]


function ReadCard () {

    const [ inputs, setInputs] = useState ([])


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

                {cardDatas.map((ele) => 
                    <PrevCard key={ele.id}  inputs={ele} />
                )}
            </main>
            
        </Layout>
    )
}

export default ReadCard;
import './ReadCard.css';
import { useState } from 'react'
import Layout from "../../component/layout/layout";
import CoverImage from "../../component/readCard-coverImage/CoverImage";
import CallOut from "../../component/readCard-CallOut/CallOut";
import SocialMedia from '../../component/readCard-SocialMedia/SocialMedia';
import Card from "../../component/readCard-Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons'


import biking from '../../assets/images/CreateCard/biking.png';
import running from '../../assets/images/CreateCard/running.png';
import swimming from '../../assets/images/CreateCard/swimming.png';
import cardio from '../../assets/images/CreateCard/cardio.png';


const cardDatas = [{
        id: 1,
        title: 'This is title',
        caption: 'I wish I was a cat, no school, no work, no exercise, just meow meow meow meow meow',
        duration: '1 h 30 m',
        date: '2023-03-18',
        task: '',
        image: 'https://images.unsplash.com/photo-1501147830916-ce44a6359892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        activity: {biking}
    },
    {
        id: 2,
        title: 'keep pushing yourself',
        caption: ' meow meow meow meow meow',
        duration: '2 h 10 m',
        date: '2023-04-17',
        task: '',
        image: 'https://images.unsplash.com/photo-1621244246296-c6be56267cc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80',
        activity: ''
    },
    {
        id: 3,
        title: 'No time to sleep',
        caption: 'I eat, sleep, and run',
        duration: ' 30 m',
        date: '2023-03-16',
        task: '',
        image: 'https://plus.unsplash.com/premium_photo-1680981143179-8a6cd94d2901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
        activity: ''
    },
    {
        id: 4,
        title: 'no title to display',
        caption: 'last test',
        duration: '1 h 48 m',
        date: '2023-03-07',
        task: '',
        image: 'https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        activity: ''
    }
]


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

                {cardDatas.map((ele) => 
                    <Card key={ele.id}  data={ele} />
                )}

                {/* submit button */}
                <input type="submit" value="Create new card" className="r-btn-create"></input>

                {/* page */}
                <div className='r-page'>
                    <FontAwesomeIcon icon={faCircleLeft} className='faCircle' />
                    <span>2</span>
                    <FontAwesomeIcon icon={faCircleRight} className='faCircle' />
                </div>
            </main>
            
        </Layout>
    )
}

export default ReadCard;
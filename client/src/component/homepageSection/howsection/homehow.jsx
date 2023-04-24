import startImage from '../../../assets/homepage/register.png';
import workoutImage from '../../../assets/homepage/workoutSmall.png';
import connectImage from '../../../assets/homepage/rankingSmall.png';
import './homehow.css'

export default function Homehow() {
    return (
        <section id="how" className="how-section">
            <h2>How it Work!</h2>
            <div className="how-card-container">
                {howSectionContent.map((content) => {
                    return (
                        <div className='how-card'>
                            <h3>{content.title}</h3>
                            <img alt={content.alt} src={content.imageUrl} />
                            <p>{content.info}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

const howSectionContent = [
    {
        title: '01 Get start!',
        alt: 'A pen',
        imageUrl: startImage,
        info: 'Sign up and set your fitness goals!'
    },
    {
        title: '02 Workout!',
        alt: 'Workout image',
        imageUrl: workoutImage,
        info: 'Track your activities and view your progress statistics!'
    },
    {
        title: '03 Connect!',
        alt: 'Statistic',
        imageUrl: connectImage,
        info: 'Connect with friends, climb the leaderboard to stay motivated!'
    }
]
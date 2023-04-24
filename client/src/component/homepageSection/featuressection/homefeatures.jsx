import activity from "../../../assets/homepage/tracker.jpg"
import rank from "../../../assets/homepage/rank.jpg"
import challenge from "../../../assets/homepage/challengeFriendSmall.jpg"
import achievement from "../../../assets/homepage/achievement.jpg"
import statistic from "../../../assets/homepage/statistic.jpg"
import leaderboard from "../../../assets/homepage/leaderboard.jpg"
import './homefeatures.css'

export default function HomeFeatures() {
    return (
        <section id='features' className="feature-section">
            <h2>Features!</h2>
            <div className="feature-card-container">
            {featuresContent.map((content, i) => {
                return (
                    <div key={content.title + i} className="feature-card">
                        <img src={content.img} alt={content.title} />
                        <h3>{content.title}</h3>
                        <p>{content.info}</p>
                    </div>
                )
            })}
            </div>
        </section>
    )
}

// Content
const featuresContent = [
    {
        img: activity,
        title: "Activity Tracking",
        info: "Easily track your workouts with our user-friendly interface. Set goals and monitor your progress towards them."
    },
    {
        img: rank,
        title: "Rank System",
        info: "Climb the ranks by completing workouts and earn badges and rewards along the way. See where you stand on our leaderboard."
    },
    {
        img: challenge,
        title: "Challenge Friends",
        info: "Invite your friends to workout challenges and see who can achieve their goals first. Stay motivated and accountable with friendly competition."
    },
    {
        img: achievement,
        title: "Achievements",
        info: " Earn achievements by completing challenges and hitting milestones. Celebrate your progress and stay motivated to reach new heights."
    },
    {
        img: statistic,
        title: "Statistic",
        info: "View detailed charts and graphs of your progress over time. Identify areas for improvement and track your growth."
    },
    {
        img: leaderboard,
        title: "Leaderboard",
        info: "See where you stand compared to other users on our leaderboard. Climb the ranks and compete for the top spot."
    }
]

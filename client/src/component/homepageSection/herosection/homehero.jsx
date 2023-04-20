import hero_image from "../../../assets/homepage/hero-img.png"
import "./homehero.css"

export default function HomeHero() {
    return (
        <section className="hero-section">
            <div className="hero-text-container">
                <h1>Make you exercise FUN!</h1>
                <p>
                    Are you tired of boring workout routines? Do you want to add
                  some excitement to your fitness journey? Look no further than
                  our activity tracker app! We believe that exercise should be
                  enjoyable and something you look forward to every day. With
                  our app, you can track your progress, challenge your friends,
                  and earn achievements all while having fun and staying
                  motivated.
                </p>
                <button className="hero-btn">Get Started!</button>
            </div>
            <div className="hero-image-container">
                <img src={hero_image} alt="strong orange-cat"/>
            </div>
        </section>
    )
}
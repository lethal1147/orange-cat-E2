import "./home.css"
import Layout from "../../component/layout/layout"
import HomeHero from "../../component/homepageSection/herosection/homehero"
import HomeFeatures from "../../component/homepageSection/featuressection/homefeatures"

export default function Home() {
    return (
        <Layout>
            <HomeHero />
            <HomeFeatures />
        </Layout>
    )
}
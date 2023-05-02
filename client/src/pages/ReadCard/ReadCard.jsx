import './ReadCard.css';
import Layout from "../../component/layout/layout"
import CoverImage from "../../component/readCard-coverImage/CoverImage"

function ReadCard () {

    return (
        <Layout>
            <main className='bg-readcard'>
                <div className='cover-image'>
                    <CoverImage />
                </div>
                <div className='quote'>
                    
                </div>
            </main>
            
        </Layout>
    )
}

export default ReadCard;
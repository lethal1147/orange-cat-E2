import './ReadCard.css';
import Layout from "../../component/layout/layout";
import CoverImage from "../../component/readCard-coverImage/CoverImage";
import CallOut from "../../component/readCard-CallOut/CallOut";

function ReadCard () {

    return (
        <Layout>
            <main className='bg-readcard'>
                <div className='r-coverimage'>
                    <CoverImage />
                </div>
                <div className='r-callout'>
                    <CallOut />
                </div>
            </main>
            
        </Layout>
    )
}

export default ReadCard;
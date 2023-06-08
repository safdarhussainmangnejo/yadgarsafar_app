import Navbar from './Navbar';
import Slider from './Slider';
import ColumnsGrid1 from './ColumnsGrid1';
import ColumnsGrid2 from './ColumnsGrid2';
import ColumnsGrid3 from './ColumnsGrid3';
import ServicesGrid from './ServicesGrid';
import Footer from './Footer';
import TourType from './TourType';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Slider/>
            <br/>
            <div className="tag2"  data-aos="zoom-in-up">
            Recommended Trips
            </div>
            <br/>
            <ColumnsGrid1/>
            <br/><br/>
            <TourType/>
            <br/><br/>
            {/* <ColumnsGrid2/> */}
            <div className="tag2"   data-aos="zoom-in-up"> 
            Explore Regions
            </div>
            <br/>
            <ColumnsGrid3/>
            <br/>
            <div className="tag2"   data-aos="zoom-in-up">
            Our Services
            </div>
            <br/>
            <ServicesGrid/>
            <br/><br/><br/>
            <Footer/>
        </>
    )
}
export default Home;
import Footer from './Footer';
import Navbar from './Navbar';
import madan from '../images/AboutUS/madan.jpeg';
import safdar from '../images/AboutUS/safdar.png';
import wahiba from '../images/AboutUS/wahiba.png';

const AboutUS = () => {

    return (
        <>
            <Navbar />
            <br /> <br /> <br /><br /><br />
            <div className='outerDiv' style={{ padding: "30px" }}>
                <div className="row">
                    <h1>Developers</h1>
                    <br /><br /><br /><br />
                </div>

                <div className="row">
                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={safdar} alt="profile Image" className="center" style={{ borderRadius: '270px' }} width="180px" height="180px" />
                    </div>

                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={madan} alt="profile Image" className="center" style={{ borderRadius: '270px' }} width="180px" height="180px" />
                    </div>

                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={wahiba} alt="profile Image" className="center" style={{ borderRadius: '270px' }} width="180px" height="180px" />
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <h2>Safdar Hussain</h2>
                    </div>

                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <h2>Madan Lal</h2>
                    </div>

                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <h2>Wahiba Akram</h2>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />
        </>
    )
}
export default AboutUS;
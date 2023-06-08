import ActionAreaCard from './SimpleCard';
import groupTour from '../images/TourType/groupTour.jpg';
import privateTour from '../images/TourType/privateTour.jpg';
import '../index.css';

const TourType = () => {

    return (
        <>
        <br/>
        <div className="row tour-type" data-aos="zoom-in-up" style={{margin:'auto'}}>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{margin:'auto'}}>
                <h1>Adventure, Your Way</h1>
                <h2>No matter who you're looking <br/> to travel with, we'll make sure everything's taken care of.</h2>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <ActionAreaCard adv="Group Adventure" type="grouptour" imeg={groupTour}/>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <ActionAreaCard adv="Private Adventure" type="privatetour" imeg={privateTour}/>
            </div>

        </div>
        <br/>
        </>
    )
}
export default TourType;
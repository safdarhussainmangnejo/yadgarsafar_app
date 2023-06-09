import Accordion from 'react-bootstrap/Accordion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import ModeOfTravelRoundedIcon from '@mui/icons-material/ModeOfTravelRounded';

const TripPlan = ({desc}) => {

    return (
        <div className='row' style={{padding:'10px', display:'flex', justifyContent:'center',marginLeft:"auto",marginRight:'auto', width:"90%"}}>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
            
            {
                desc == null ? <div>
                    Loading...
                </div>: 
                <>
                    <Accordion flush>
                    <h2 style={{color: '#0d6efd'}}>Trip Plan</h2><br/>
                        {
                            desc.length > 0 && desc.map((data, index) => {
                                return (
                                    index === desc.length-1 ?
                                    (<Accordion.Item eventKey={data.tripid}>
                                        <Accordion.Header><ModeOfTravelRoundedIcon style={{fontSize:'24px', color: "tomato"}}/> &nbsp; Day {index+1}</Accordion.Header>
                                        <Accordion.Body>
                                        {data.details}
                                        </Accordion.Body>
                                     </Accordion.Item>)
                                    :
                                    
                                    
                                    index === 0 ?
                                    (<Accordion.Item eventKey={data._id}>
                                    
                                    
                                    <Accordion.Header><LocationOnIcon style={{fontSize:'24px', color: "lightgreen"}}/> &nbsp; Day {index+1}</Accordion.Header>
                                    <Accordion.Body>
                                    {data.details}
                                    </Accordion.Body>
                                    </Accordion.Item>)
                                    :
                                    (<Accordion.Item eventKey={data._id}>
                                    
                                    
                                    <Accordion.Header><MyLocationRoundedIcon style={{fontSize:'24px', color: "#0d6efd"}}/> &nbsp; Day {index+1}</Accordion.Header>
                                        <Accordion.Body>
                                        {data.details}
                                        </Accordion.Body>
                                        </Accordion.Item>)
                                    )
                            })
                        }
                        
                        </Accordion>          
                    </>
                }
            </div>
        </div>
    )
}

export default TripPlan;
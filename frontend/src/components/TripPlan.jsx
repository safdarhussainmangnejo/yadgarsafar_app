import Accordion from 'react-bootstrap/Accordion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import ModeOfTravelRoundedIcon from '@mui/icons-material/ModeOfTravelRounded';

const TripPlan = ({desc}) => {
    // {console.log("in Plan.js desc: ", desc, "pckg.TripPlan typr: ", typeof desc)}

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
             

            {/* <Accordion flush>
                {
                    desc.map((plan, index)=>{
                        // console.log("plan: ", plan.details, "index: ",index, "type plan.details: ", typeof plan.details, "intex tyoe: ", typeof index, "index==0: ", index===0);
                        if(index===0){
                            <Accordion.Item eventKey="0">
                                return
                                <>
                                <h2 style={{color: '#0d6efd'}}>Trip Plan</h2><br/>
                                <Accordion.Header><LocationOnIcon style={{fontSize:'24px', color: "lightgreen"}}/> &nbsp; Day 01</Accordion.Header>
                                <Accordion.Body>
                                sfdsfdgfdhgjghj
                                </Accordion.Body>
                            </>
                            </Accordion.Item>
                        } */}
                         {/* if(index===desc.legth-1){
                            <Accordion.Item eventKey={plan.tripid}>
                                <Accordion.Header><ModeOfTravelRoundedIcon style={{fontSize:'24px', color: "tomato"}}/> &nbsp; Day 06</Accordion.Header>
                                <Accordion.Body>
                                {plan.details}
                                </Accordion.Body>
                             </Accordion.Item>
                        }
                        else{
                            <Accordion.Item eventKey={plan.tripid}>
                                <Accordion.Header><MyLocationRoundedIcon style={{fontSize:'24px', color: "#0d6efd"}}/> &nbsp; Day 02</Accordion.Header>
                                <Accordion.Body>
                                    {plan.details}
                                </Accordion.Body>
                            </Accordion.Item>
                        }
                    })
                } */}
                {/* <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <h2 style={{color: '#0d6efd'}}>Trip Plan</h2><br/>
                        <Accordion.Header><LocationOnIcon style={{fontSize:'24px', color: "lightgreen"}}/> &nbsp; Day 01</Accordion.Header>
                        <Accordion.Body>
                        {props.desc}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><MyLocationRoundedIcon style={{fontSize:'24px', color: "#0d6efd"}}/> &nbsp; Day 02</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><MyLocationRoundedIcon style={{fontSize:'24px', color: "#0d6efd"}}/> &nbsp; Day 03</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><MyLocationRoundedIcon style={{fontSize:'24px', color: "#0d6efd"}}/> &nbsp; Day 04</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><MyLocationRoundedIcon style={{fontSize:'24px', color: "#0d6efd"}}/> &nbsp; Day 05</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><ModeOfTravelRoundedIcon style={{fontSize:'24px', color: "tomato"}}/> &nbsp; Day 06</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
            </div>
        </div>
    )
}

export default TripPlan;
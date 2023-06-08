import Accordion from 'react-bootstrap/Accordion';


const Services = (props) => {
    return (
        <>
        <div className='row' style={{display:'flex', justifyContent:'center',marginLeft:"auto",marginRight:'auto', width:"90%"}}>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>

                <Accordion flush>
                <Accordion.Item eventKey="0">
                <h2 style={{color: '#0d6efd'}}>{props.title}</h2><br/>
                    <Accordion.Header>{props.icon1} &nbsp; {props.service1}</Accordion.Header>
                    <Accordion.Body>
                        {props.service1} {props.message}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>{props.icon2} &nbsp; {props.service2}</Accordion.Header>
                    <Accordion.Body>
                        {props.service2} {props.message}
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                    <Accordion.Header>{props.icon3} &nbsp; {props.service3}</Accordion.Header>
                    <Accordion.Body>
                        {props.service3} {props.message}
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>

            </div>
        </div>
        </>
    )
}
export default Services;
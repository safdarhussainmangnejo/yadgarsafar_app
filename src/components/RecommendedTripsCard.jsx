import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import Details from './Details';

function RecommendedTripsCard(props) {
  return (
      

          <div className="container-fluid m-auto d-inline" style={{borderRadius: "20px"}}   data-aos="zoom-in-up">
                <Card className="cardScale" style={{ width: '17.8rem', marginLeft:'auto', marginRight:'auto'}}>
                  <Card.Img variant="top" src={props.image} alt="image..." style={{width:"285px", height: "240px"}} />
                  <Card.Body>
                    <div className='row g-0'>

                      <div className='col-8'>
                          <Card.Title style={{textAlign: "left", display:'grid', paddingBottom:"5px", fontFamily: "sans-serif", fontWeight:"bold", fontSize:'18px'}}>{props.name}</Card.Title>
                      </div>
                      <div className='col-4'>
                          <Card.Title style={{textAlign: "right", display:'grid', paddingBottom:"5px", fontFamily: "sans-serif", fontWeight:"bold", fontSize:'15px'}}>{props.duration}</Card.Title>
                      </div>
                      
                    </div>

                    <div className='row g-0'>

                      <div className='col-8'>
                          <Card.Title style={{textAlign: "left", paddingBottom:"5px", fontFamily: "sans-serif"}}>Price: {props.price}</Card.Title>
                      </div>
                      <div className='col-4'>
                          <Card.Title style={{textAlign: "right", paddingBottom:"5px", fontFamily: "sans-serif"}}><StarIcon sx={{color:'#0d6efd', fontSize:"28px", paddingBottom:"6px"}}/>  4.8 </Card.Title>
                      </div>

                    </div>

                    <a href={`/pack_detail/${props.id}`} >
                      <Button variant="outline-primary form-control" onClick={<Details/>}>Book Now</Button>
                    </a>
                  </Card.Body>
                </Card> 
           </div>
      
  );
}


export default RecommendedTripsCard;
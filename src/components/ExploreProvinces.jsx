import React from 'react';
import { Card } from 'react-bootstrap';
import '../index.css';

function ExploreProvinces(props) {

  return (
    
    <div className="container-fluid m-auto d-inline expProvince" data-aos="zoom-in-up">
      <Card className="cardScale" style={{ width: '17.8rem', marginLeft: 'auto', marginRight: 'auto', border: 'none' }}>
        <a href={`/packages/province/${props.province}`} >
          <Card.Img variant="top" src={props.image} alt="image..." style={{ width: "300px", height: "250px", borderRadius: "20px" }} />
        </a>
        <Card.Body>
          <div className='row g-0'>

            <div className='col-12'>
              <Card.Title style={{ textAlign: "left", display: 'grid', paddingBottom: "5px", fontFamily: "sans-serif", fontWeight: "bold", justifyContent: "center", textAlign: "center" }}>{props.name}</Card.Title>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>

  );
}
export default ExploreProvinces;
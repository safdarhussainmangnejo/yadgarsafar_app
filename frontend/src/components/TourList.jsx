import "../tourlist.css"
import Footer from "./Footer";
import Navbar from './Navbar';
import {Card, Body, Img, Row, Col} from 'react-bootstrap';
import ranikot from '../images/Recommended/ranikot.jpeg';
import Pagination  from "./Pagination";
const TourList = () => {
    return (
        <>
        <Navbar/>
       
        <div className="tourDiv">
        
            <h1 className="tourTitle">Find Best Tours</h1>
            
        </div>
        <br/>
        <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={ranikot} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        <div className="d-sm-flex justify-content-between my-4 pb-4" style={{border:'1px solid grey', width:'500px'}}>
                <div className="media d-block d-sm-flex text-center text-sm-left">
                    <a className="cart-item-thumb mx-auto mr-sm-4" href="#">
                        <img src="https://via.placeholder.com/240x240/FF0000/000000" alt="Product"/>
                    </a>
                    <div className="media-body pt-3" style={{marginLeft:'10px'}}>
                        <h3 className="product-card-title font-weight-semibold border-0 pb-0"><a href="#">Calvin Klein Jeans Keds</a></h3>
                        <div className="font-size-sm"><span className="text-muted mr-2">Size:</span>8.5</div>
                        <div className="font-size-sm"><span className="text-muted mr-2">Color:</span>Black</div>
                        <div className="font-size-lg text-primary pt-2">$125.00</div>
                    </div>
                </div>
                
            </div>
            <Pagination/>
            <Footer/>
            </>
            );
    }
    export default TourList;
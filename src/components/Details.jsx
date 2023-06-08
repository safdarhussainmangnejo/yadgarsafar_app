import * as React from 'react';
import minarEpakistan from "../images/Provinces/minarEpakistan.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TextField from '@mui/material/TextField';
import Services from "./Services";
import Reviews from "./Reviews";
import TripPlan from "./TripPlan";
import FAQ from "./FAQ";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ProceedToPay from "./ProceedToPay";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Details = (props) => {
  const [detail, setDetail] = useState([]);
  const [user, setUser] = useState([]);
  const [numberOfPeople, setnumberOfPeople] = useState(1);
  const [grandTotal, setGrandTotal] = useState(0);
  let { id, province } = useParams();
  const navigate = useNavigate();

  const LocalStorageUser = JSON.parse(localStorage.getItem(''))
  const fetchData = async () => {
    let data = await axios.get("http://localhost:8080/getUsers");

    setDetail(data.data);
  };

  const fetchData2 = async () => {
    let user = await axios.get("http://localhost:8080/getData");

    setUser(user.data);
  };

  // calling price of package
  const findPackagePrice = async ()=>{
    await fetch(`http://localhost:8080/findPackagePrice/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          console.log('Package Not found----------');
        } else {
          setGrandTotal(data.price);
          console.log("findPackagePrice: ", data.price)
        }
      });
    }


  useEffect(() => {
    findPackagePrice();
    fetchData();
    fetchData2();
  }, []);

  const addPackage = () => {
    navigate(`/pay/${id}/${grandTotal}&${numberOfPeople}`);
  };



  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "80px" }}></div>
      <br />
      <br />

      {detail.length > 0 &&
        detail.map((prof) =>
          prof.packages.slice(0, prof.length).map((pckg) => {
            if (id === pckg._id) {
              return (
                <>
               
                  <div className="row g-0">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                      {/* package wallpaper */}
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={pckg.image}
                          alt="minar-e-pakistan"
                          style={{
                            boxShadow:

                              "0 2px 5px 0 rgb(153, 150, 150),0 2px 10px 0 rgb(153, 150, 150)",
                            borderRadius: "10px",
                          }}
                          width="85%"
                          height="450px"
                        />
                      </div>

                      <br />

                      {/* package wallpaper description */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "85%",
                          
                        }}
                      >
                        <h6 style={{textAlign: 'justify'}}>{pckg.packageDescription}</h6>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12"
                      style={{ paddingLeft: "20px", paddingRight: "50px" }}
                    >
                      <div>
                        <h2 style={{ color: "#0d6efd" }}>{pckg.packageName}</h2>
                        <h5>
                          {" "}
                          <img
                            src={prof.companyImage}
                            style={{ borderRadius: "20px" }}
                            width="25px"
                            height="25px"
                            alt="company image"
                          />{" "}
                          {prof.companyName}
                        </h5>

                        <br/>

                        <div className="row">

                        <div className="col">

                        <h5>Services</h5>
                        {/* Included1 */}
                        {pckg.included1.length > 0 && (
                          // pckg.included.map(inc => {
                          //     return
                          <h6>
                            {console.log("Included1 => ", pckg.included1)}
                            {pckg.included1
                              .toLowerCase()
                              .match("accommodation") && (
                              <HotelIcon style={{ paddingBottom: "4px", color: "limegreen" }} />
                            )}

                            {pckg.included1.toLowerCase().match("guide") && (
                              <PersonPinCircleIcon

                                style={{ paddingBottom: "4px", color: "limegreen" }}
                              />
                            )}

                            {pckg.included1.toLowerCase().match("food") && (
                              <RestaurantIcon
                                style={{ paddingBottom: "4px", color: "limegreen" }}
                              />
                            )}

                            {pckg.included1
                              .toLowerCase()
                              .match("first aid") && (
                              <LocalHospitalIcon

                                style={{ paddingBottom: "4px", color: "limegreen" }}
                              />
                            )}

                            {pckg.included1
                              .toLowerCase()
                              .match("photography") && (
                              <CameraAltIcon
                                style={{

                                  paddingBottom: "4px", color: "limegreen"                                }}
                              />
                            )}

                            {pckg.included1}
                            <CheckCircleIcon
                              style={{ paddingBottom: "4px", color: "green" }}
                            />
                          </h6>
                        )}

                        {/* Included2 */}
                        {pckg.included2.length > 0 && (
                          // pckg.included.map(inc => {
                          //     return
                          <h6>
                            {console.log("Included1 => ", pckg.included2)}
                            {pckg.included2
                              .toLowerCase()
                              .match("accommodation") && (

                              <HotelIcon style={{ paddingBottom: "4px", color: "limegreen" }} />
                            )}

                            {pckg.included2.toLowerCase().match("guide") && (
                              <PersonPinCircleIcon

                                style={{ paddingBottom: "4px", color: "limegreen" }}
                              />
                            )}

                            {pckg.included2.toLowerCase().match("food") && (
                              <RestaurantIcon
                                style={{ paddingBottom: "4px", color: "limegreen" }}
                              />
                            )}

                            {pckg.included2
                              .toLowerCase()
                              .match("first aid") && (
                              <LocalHospitalIcon
                                style={{ paddingBottom: "4px", color: "limegreen" }}
                              />
                            )}

                            {pckg.included2
                              .toLowerCase()
                              .match("photography") && (
                              <CameraAltIcon
                                style={{
                                  paddingBottom: "4px",
                                  color: "limegreen"
                                }}
                              />
                            )}

                            {pckg.included2}
                            <CheckCircleIcon
                              style={{ paddingBottom: "4px",color: "green" }}
                            />
                          </h6>
                        )}

                        {/* Not Included1 */}
                        {pckg.notIncluded1.length > 0 && (
                          //   pckg.notIncluded.map((ninc) => {
                          //     return
                          <h6>
                            {pckg.notIncluded1
                              .toLowerCase()
                              .match("accommodation") && (
                              <HotelIcon style={{paddingBottom: "4px", color: "tomato" }} />
                            )}

                            {pckg.notIncluded1.toLowerCase().match("guide") && (
                              <PersonPinCircleIcon
                                style={{paddingBottom: "4px", color: "tomato" }}
                              />
                            )}

                            {pckg.notIncluded1.toLowerCase().match("food") && (
                              <RestaurantIcon
                                style={{ paddingBottom: "4px", color: "tomato" }}
                              />
                            )}

                            {pckg.notIncluded1
                              .toLowerCase()
                              .match("first aid") && (
                              <LocalHospitalIcon
                                style={{ color: "tomato", paddingBottom: "4px" }}
                              />
                            )}

                            {pckg.notIncluded1
                              .toLowerCase()
                              .match("photography") && (
                              <CameraAltIcon
                                style={{
                                  paddingBottom: "4px",
                                  color: "tomato"
                                }}
                              />
                            )}

                            {pckg.notIncluded1}
                            <CancelIcon
                              style={{ paddingBottom: "4px", color: "red" }}
                            />
                          </h6>
                        )}

                        {/* Not Included2 */}
                        {pckg.notIncluded2.length > 0 && (
                          //   pckg.notIncluded.map((ninc) => {
                          //     return
                          <h6>
                            {pckg.notIncluded2
                              .toLowerCase()
                              .match("accommodation") && (
                              <HotelIcon style={{ color: "tomato", paddingBottom: "4px" }} />
                            )}

                            {pckg.notIncluded2.toLowerCase().match("guide") && (
                              <PersonPinCircleIcon
                                style={{ color: "tomato", paddingBottom: "4px" }}
                              />
                            )}

                            {pckg.notIncluded2.toLowerCase().match("food") && (
                              <RestaurantIcon
                                style={{ color: "tomato", paddingBottom: "4px" }}
                              />
                            )}

                            {pckg.notIncluded2
                              .toLowerCase()
                              .match("first aid") && (
                              <LocalHospitalIcon
                                style={{ color: "tomato", paddingBottom: "4px" }}
                              />
                            )}

                            {pckg.notIncluded2
                              .toLowerCase()
                              .match("photography") && (
                              <CameraAltIcon
                                style={{
                                  paddingBottom: "4px",
                                  color: "tomato",
                                }}
                              />
                            )}

                            {pckg.notIncluded2}
                            <CancelIcon
                              style={{ paddingBottom: "4px", color: "red" }}
                            />
                          </h6>
                        )}

                        </div>
                        <div className="col">

                        <h5>
                          Reviews{" "}
                          <StarIcon
                            style={{ fontSize: "16px", color: "orange" }}
                          />
                          <StarIcon
                            style={{ fontSize: "16px", color: "orange" }}
                          />
                          <StarIcon
                            style={{ fontSize: "16px", color: "orange" }}
                          />
                          <StarIcon
                            style={{ fontSize: "16px", color: "orange" }}
                          />
                          <StarIcon
                            style={{ fontSize: "16px", color: "orange" }}
                          />
                        </h5>
                        <h6>Duration: {pckg.packageDuration}</h6>
                        <h6>Age Group: {pckg.ageRange}</h6>
                        <h6>Tour Category: {pckg.tourCategory}</h6>
                        <h6>Tour Type: {pckg.tourType}</h6>

                        </div>

                        </div>




                        <br />
                        <h3>Price: PKR {pckg.price}</h3>
                        <br />
                        <div className='row'>              
                        <div className='col'>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                  disabled
                                    label="Starts From"
                                    value={pckg.packageStartFrom}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>

                        <div className='col'>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    disabled
                                    label="Ends At"
                                    value={pckg.packageEndAt}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        </div>
                        <br/>
                        <div className='row' style={{margin: '2px'}}>
                          
                            <TextField
                                id="outlined-number"
                                label="Number of People"
                                type='number'
                                value={numberOfPeople}
                                name="numberofPeople"
                                onChange={e => {
                                  setnumberOfPeople(e.target.value);
                                  setGrandTotal(e.target.value*pckg.price)
                                  console.log("grandTotal1 : ",grandTotal," no.people : ",numberOfPeople, "typeof result : ",typeof result);
                                }}
                            />
                           
                        </div>
                        <br/> 
                        
                        <h3>Total PKR: {grandTotal}/for {numberOfPeople}</h3>
                        <br/>
                        
                        <Button
                          type="submit"
                          className="btn btn-primary form-control"
                          onClick={addPackage}
                        >
                          Book Now
                        </Button>
                        
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>

                  <div className="row g-0">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                      {/* Question Accordian */}

                      <Services
                        title="What's Included"
                        message="is available and included."
                        service1="Accomodation"
                        service2="Food"
                        service3="Transport"
                        icon1={
                          <HotelIcon
                            style={{ fontSize: "24px", color: "#0d6efd" }}
                          />
                        }
                        icon2={
                          <RestaurantIcon
                            style={{ fontSize: "24px", color: "#0d6efd" }}
                          />
                        }
                        icon3={
                          <DirectionsCarIcon
                            style={{ fontSize: "24px", color: "#0d6efd" }}
                          />
                        }
                      />
                      <br />
                      <br />
                      <Services
                        title="What's Not Included"
                        message="is not included."
                        service1="Guide"
                        service2="First Aid Box"
                        service3="Photography"
                        icon1={
                          <PersonPinCircleIcon
                            style={{ fontSize: "24px", color: "tomato" }}
                          />
                        }
                        icon2={
                          <LocalHospitalIcon
                            style={{ fontSize: "24px", color: "tomato" }}
                          />
                        }
                        icon3={
                          <CameraAltIcon
                            style={{ fontSize: "24px", color: "tomato" }}
                          />
                        }
                      />

                      <br />
                      <br />
                      <br />

                      {/* Days Accordian */}
                      <TripPlan desc={pckg.tripPlan} />

                      <br />
                      <br />
                      <br />

                      {/* FAQ Accordian */}
                      <FAQ ques1={pckg.question1} ans1={pckg.answer1} ques2={pckg.question2} ans2={pckg.answer2} ques3={pckg.question3} ans3={pckg.answer3}/>

                      <br />
                      <br />
                      <br />
                      <br />

                      {/* Review Section */}
                      <Reviews />

                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                  </div>
                </>
              );
            }
          })
        )}

      <Footer />
    </>
  );
}

export default Details;
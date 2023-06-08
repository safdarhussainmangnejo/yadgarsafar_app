import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import HotelIcon from "@mui/icons-material/Hotel";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import pageNotFound from '../images/pageNotFound.jpg';
import axios from "axios";
import { useState, useEffect } from "react";
import Details from "./Details";

const PackageCard = (props) => {
  const [user, setUser] = useState([]);

  var found = false;

  const fetchData = async () => {
    let data = await axios.get("http://localhost:8080/getUsers");

    setUser(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
        // console.log('Madan TOur Category : ',props.tourCategory)
        // console.log('Madan TOur Category : ',typeof(props.tourCategory))
      }

      {user.length > 0 &&
        user.map((prof) =>
        prof.packages.map((pckg) => {
          if (pckg.packageName.toLowerCase().match(props.packName) && pckg.tourCategory.match(props.tourCategory) && (props.tourType ? props.tourType == pckg.tourType : true) && (props.age ? props.age === pckg.ageRange : true) && (props.province ? props.province === pckg.packageProvince : true) && (props.departing ? props.departing <= pckg.packageStartFrom : true) && (props.returning ? props.returning >= pckg.packageEndAt : true)) //  && (props.tourCategory && pckg.tourCategory.match(props.tourCategory))
          // console.log(props.province && props.province === pckg.packageProvince);
          // console.log(props.privateTour && props.privateTour === pckg.tourType);
          // console.log("Okey");
          // if(props.departing >= pckg.packageStartFrom && props.returning <= pckg.packageEndAt)
          // if()
              // console.log(props.departing ? props.departing >= pckg.packageStartFrom : true);
              // console.log(props.departing == pckg.packageStartFrom)

              // console.log("Tour Type... : ", typeof pckg.tourType);

              // ||
              // pckg.tourCategory == props.tourCategory ||
              // pckg.tourType == props.groupTour ||
              // pckg.tourType == props.privateTour


              return (
                <>
                {found = true}
                  <div
                    className="row bdr"
                    style={{
                      border: "1px solid 	#eeeedd",
                      margin: "auto",
                      marginTop: "16px",
                      display: "flex",
                      borderRadius: "8px",
                      width: "96%",
                      height: "202px",
                    }}

                    data-aos="zoom-in-up"
                  >
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 g-0">
                      <img
                        src={pckg.image}
                        alt="image"
                        height="200px"
                        width="240px"
                        style={{
                          float: "left",
                          left: "0",
                          borderRadius: "8px 0px 0px 8px",
                          padding: "0px",
                        }}
                      />
                    </div>

                    <div
                      className="col-xl-8 col-lg-8 col-md-6 col-sm-12 g-0"
                      style={{ paddingRight: "10px", paddingLeft: "10px" }}
                    >
                      <br />
                      <div className="row" style={{ marginTop: "-20px" }}>
                        <div className="col-6">
                          <h5>{pckg.packageName}</h5>
                          <h6>
                            {" "}
                            <img
                              src={prof.companyImage}
                              style={{ borderRadius: "20px" }}
                              width="25px"
                              height="25px"
                              alt="company image"
                            />{" "}
                            {prof.companyName}
                          </h6>

                          {/* Included1 */}
                          {pckg && pckg.included1 && pckg.included1.length > 0 && (
                            // pckg.included1.map((inc) =>

                            <h6>
                              {/* {console.log("Included1 => ", pckg.included1)} */}
                              {pckg.included1
                                .toLowerCase()
                                .match("accommodation") && (
                                <HotelIcon style={{ paddingBottom: "4px" }} />
                              )}

                              {pckg.included1.toLowerCase().match("guide") && (
                                <PersonPinCircleIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.included1.toLowerCase().match("food") && (
                                <RestaurantIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.included1
                                .toLowerCase()
                                .match("first aid") && (
                                <LocalHospitalIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.included1
                                .toLowerCase()
                                .match("photography") && (
                                <CameraAltIcon
                                  style={{
                                    paddingBottom: "4px",
                                    color: "tomato",
                                  }}
                                />
                              )}

                              {pckg.included1}
                              <CheckCircleIcon
                                style={{
                                  paddingBottom: "4px",
                                  color: "green",
                                }}
                              />
                            </h6>
                          )}
                          {/* included2 */}
                          {pckg && pckg.included2 && pckg.included2.length > 0 && (
                            // pckg.included2.map((inc) =>

                            <h6>
                              {/* {console.log("Included1 => ", pckg.included2)} */}
                              {pckg.included2
                                .toLowerCase()
                                .match("accommodation") && (
                                <HotelIcon style={{ paddingBottom: "4px" }} />
                              )}

                              {pckg.included2.toLowerCase().match("guide") && (
                                <PersonPinCircleIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.included2.toLowerCase().match("food") && (
                                <RestaurantIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.included2
                                .toLowerCase()
                                .match("first aid") && (
                                <LocalHospitalIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.included2
                                .toLowerCase()
                                .match("photography") && (
                                <CameraAltIcon
                                  style={{
                                    paddingBottom: "4px",
                                    color: "tomato",
                                  }}
                                />
                              )}

                              {pckg.included2}
                              <CheckCircleIcon
                                style={{
                                  paddingBottom: "4px",
                                  color: "green",
                                }}
                              />
                            </h6>
                          )}

                          {/* notIncluded1 */}
                          {pckg && pckg.notIncluded1 && pckg.notIncluded1.length > 0 && (
                            // pckg.notIncluded.map((ninc) => {
                            //   return

                            <h6>
                              {/* {console.log("Included1 => ", pckg.included2)} */}
                              {pckg.notIncluded1
                                .toLowerCase()
                                .match("accommodation") && (
                                <HotelIcon style={{ paddingBottom: "4px" }} />
                              )}

                              {pckg.notIncluded1.toLowerCase().match("guide") && (
                                <PersonPinCircleIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.notIncluded1.toLowerCase().match("food") && (
                                <RestaurantIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.notIncluded1
                                .toLowerCase()
                                .match("first aid") && (
                                <LocalHospitalIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.notIncluded1
                                .toLowerCase()
                                .match("photography") && (
                                <CameraAltIcon
                                  style={{
                                    paddingBottom: "4px",
                                    color: "tomato",
                                  }}
                                />
                              )}
                              {pckg.notIncluded1}
                              <CancelIcon
                                style={{
                                  paddingBottom: "4px",
                                  color: "red",
                                }}
                              />
                            </h6>
                          )}

                          {/* notIncluded2 */}
                          {pckg && pckg.notIncluded2 && pckg.notIncluded2.length > 0 && (
                            // pckg.notIncluded.map((ninc) => {
                            //   return

                            <h6>
                              {/* {console.log("Included1 => ", pckg.included2)} */}
                              {pckg.notIncluded2
                                .toLowerCase()
                                .match("accommodation") && (
                                <HotelIcon style={{ paddingBottom: "4px" }} />
                              )}

                              {pckg.notIncluded2.toLowerCase().match("guide") && (
                                <PersonPinCircleIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.notIncluded2.toLowerCase().match("food") && (
                                <RestaurantIcon
                                  style={{ paddingBottom: "4px" }}
                                />
                              )}

                              {pckg.notIncluded2
                                .toLowerCase()
                                .match("first aid") && (
                                <LocalHospitalIcon
                                  style={{ paddingBottom: "4px" }}
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
                                style={{
                                  paddingBottom: "4px",
                                  color: "red",
                                }}
                              />
                            </h6>
                          )}
                        </div>

                        <div
                          className="col-6"
                          style={{
                            display: "grid",
                            justifyContent: "left",
                            float: "left",
                          }}
                        >
                          <h6>
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
                          </h6>
                          <h6>Duration: {pckg.packageDuration}</h6>

                          <h6>Age Range: {pckg.ageRange}</h6>
                          <h5>PKR {pckg.price}</h5>
                          <br />
                          <a href={`/Pack_Detail/${pckg._id}`}>
                            <button className="btn btn-outline-primary form-control">
                              Book Now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
              
              
            // }
            // &&  pckg.tourCategory.trim().match(props.tourCategory)
            // if(props.tourCategory &&  pckg.tourCategory.match(props.tourCategory))
            // if(pckg.tourCategory.length > 0 &&  pckg.tourCategory.match(props.tourCategory))

            // props.tourCategory.length > 0 && pckg.tourCategory.match(props.tourCategory) // JSON.stringify(props.tourCategory).length > 0 &&

            // && props.tourCategory !== '' && pckg.tourCategory.match(props.tourCategory)
            // && props.groupTour !=== '' && pckg.tourType.match(props.groupTour)
            // &&
            // && props.privateTour !=== '' && pckg.tourType.match(props.privateTour)
            // &&
            // && props.age !=== '' && pckg.ageRange.match(props.age)
            // &&
            // && props.sindh !=== '' && pckg.packageProvince.match(props.sindh)
            // &&
            // && props.punjab !=== '' && pckg.packageProvince.match(props.punjab)
            // &&
            // && props.balochistan !=== '' && pckg.packageProvince.match(props.balochistan)
            // &&
            // && props.kpk !=== '' && pckg.packageProvince.match(props.kpk)
            // &&
            // && props.gilgitBaltistan !=== '' && pckg.packageProvince.match(props.gilgitBaltistan)
            // &&
            // && props.azadKashmir !=== '' && pckg.packageProvince.match(props.azadKashmir)
            // &&
            // && props.islamabad !=== '' && pckg.packageProvince.match(props.islamabad)
          })
        )}
        {found == false ?
                // return (
                  <div>
                    <img src={pageNotFound} alt="Package Not Found!" width="600px" style={{justifyContent:'center', display:'grid', marginLeft:'auto', marginRight:'auto'}}/>
                  </div>
                // )
                :
                null
        }
    </>
  );
};
export default PackageCard;

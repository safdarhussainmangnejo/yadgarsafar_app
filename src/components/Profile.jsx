import img from '../images/madan.JPG';
import Navbar from './Navbar';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Profile = () => {

    const [prof,setProf ] = useState();
    const [user,setUser ] = useState([]);
    const [packages, setPackages] = useState([]);

    var data;
    const fetchData = async () => {
      fetch("http://localhost:8080/getData")                   // "http://localhost:27017/getData"
        .then(response => response.json()).then(data => {

            setProf(data)
        })
    }


    const fetchData2 = async () => {

        let user = await axios.get('http://localhost:8080/getData')

        setUser(user.data)
        setPackages(user.data.bookedPackages);
    }


    useEffect(() => {
        fetchData();
        fetchData2();
    }, [])
  

    let uri;



    
    return (
        <>
        <Navbar/>
        {
            prof == null ? <div>
                Loading...
            </div>: 
            <>
                <div className="row">
                    {
                        uri = `/editprofile/${prof._id}`
                    }
                </div>

                <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" style={{padding:"30px", marginTop:"60px"}}>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <img src={prof.image} alt="profile Image" className="center" style={{ borderRadius:'270px'}} width="180px" height="180px"/>
                    </div>
                    <h2 style={{textAlign:'center'}}>{prof.firstname+" "+prof.lastname}</h2>
                    <Link style={{textDecoration:'none' }} to={uri}><EditIcon/>Edit Profile</Link>
                    
                    <hr/>
                    <h4>Location : {prof.city}, {prof.country}</h4>
                    <br/>
                    <h3>Your Interests</h3>

                    {
                        prof.interests.map(data => {
                            if(data !== "") {
                                return <h5>{data}</h5>
                            }
                        })
                    }

                </div>
                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12"  style={{padding:"30px", marginTop:"60px"}}>

                <h1>Previous Trips</h1>

                {
                user == null ? <div>
                    Loading...
                </div>: 
                <>
                    <table className="table">
                        <thead className="bg-primary text-white">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>  
                            <th scope="col">Package Name</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Package Price</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            packages.length > 0 && packages.map((data, index) => {
                                return (
                                        <tr key={data._id}>
                                        <th scope="row">{index+1}</th>
                                        <td><img src={data.image} alt="image..." width="50px" /></td>
                                        <td>{data.packageName}</td>
                                        <td>{data.companyName}</td>
                                        <td>{data.price}</td>
                                        {data.paymentStatus ? <td>{data.paymentStatus}</td> : "Paid"}
                                        
                                        </tr>
                                    )
                            })
                        }
                        </tbody>
                        </table>            
                    </>
                    }
                </div>
            </div>
            </>
        }
        </>
    )
}

export default Profile;
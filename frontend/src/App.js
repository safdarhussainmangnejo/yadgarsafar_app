import React from "react";
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ColumnsGrid1 from './components/ColumnsGrid1';
import ColumnsGrid2 from './components/ColumnsGrid2';
import ColumnsGrid3 from './components/ColumnsGrid3';
import SignIn from './components/SignIn';
import AgencyDashboard from "./components/AgencyDashboard";
import SignUp from "./components/SignUp";
import Footer from './components/Footer';
import ServicesGrid from "./components/ServicesGrid";
import Packages from "./components/Packages";
import {Route,Routes} from 'react-router';
import Home from './components/Home';
import TourList from "./components/TourList";
import Details from './components/Details';
import AgenciesGrid from "./components/AgenciesGrid";
import ProceedToPay from "./components/ProceedToPay";
import Profile from './components/Profile';
import ProtectedRoute from "./components/ProtectedRoutes";
import Logout from './components/Logout';
import {useNavigate} from 'react-router-dom'
import EditProfile from "./components/EditProfile";
import CheckoutForm from "./components/CheckoutForm";
import AboutUS from "./components/AboutUS";
import StripeContainer from './components/StripeContainer';

const App = () => {
  
//   const Logout = () => {

//     const navigate = useNavigate();
//     localStorage.clear();
//     navigate('/SignIn');

// }

  return (
    <>
    <Routes>
      <Route element={<ProtectedRoute/>} >
        <Route path="/agencydashboard" element={<AgencyDashboard/>}/>
        <Route path="/pay/:id/:grandTotal&:numberOfPeople" element={<StripeContainer/>}/>
        <Route path='/create-payment-intent' element={CheckoutForm}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route path="/Logout" element={<Logout/>}/> 
        <Route path="/editprofile/:id" element={<EditProfile/>}/> 

      </Route>

      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUS/>}/>
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/packages/province/:province" element={<Packages/>}/>
      <Route path="/packages/:name/:tourcategory/:departing/:returning" element={<Packages/>}/>
      <Route path="/packages/:type" element={<Packages/>}/>

      <Route path="/pack_detail/:id" element={<Details/>}/> 
      <Route path="/agencies" element={<AgenciesGrid/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>

    </Routes>
    </>
  )
};
export default App;

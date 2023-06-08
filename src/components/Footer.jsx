import * as React from 'react';
import logo from '../images/logo.png';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../index.css";
import footerImg from "../images/footerImgPng.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const useStyles = makeStyles({
    image: {
        height: 80
    }
  });

export default function Footer(){
    const classes = useStyles();
    return(
        <footer>
                    <div className='row g-0'>
                        <div className='spacing pl-50 col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                        
                            <a  href="#/" id="logoImg">
                                <img src={logo} alt="footer logo" className={classes.image} />

                            </a>

                            <br/>

                            <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>

                            <br/>

                            <a href="http://www.facebook.com" target="_blank" >
                                <FacebookIcon className='Hover2' fontSize='large'/>
                            </a>

                            &nbsp;&nbsp;

                            <a href="https://twitter.com" target="_blank">
                                <TwitterIcon className='Hover2' fontSize='large'/>
                            </a>

                            &nbsp;&nbsp;
                            
                            <a href="https://instagram.com" target="_blank">
                            <InstagramIcon onClick={()=> "/http://www.google.com"} className='Hover2' fontSize='large'/>
                            </a>
                            
                            &nbsp;&nbsp;

                            <a href="https://linkedin.com" target="_blank">
                            <LinkedInIcon className='Hover2' fontSize='large'/>
                            </a>
                            
                        </div> 

                        <div className='spacing col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                               <h3>Contact Us</h3> 

                            <br/>

                                <p> <LocationOnIcon/> Sukkur, Sindh Pakistan</p>

                                <EmailIcon/> &nbsp;
                                {/* <a className='Hover' href="/" color="inherit"> */}
                                     yadgarsafar@gmail.com
                                {/* </a> */}

                                <br/><br/>

                                    <PhoneIcon/> +92123456789

                        </div> 


                        <div className='spacing col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                                <h3 id="quickLink">Quick Links</h3>

                            <div className='decoration'>
                                <a  className='Hover' href="/" color="inherit">
                                    Home
                                </a>
                            </div>

                            <div className='decoration'>
                                <a  className='Hover' href="/aboutUs" color="inherit">
                                    About Us
                                </a>
                            </div>

                            <div className='decoration'>
                                <a  className='Hover' href="/packages" color="inherit">
                                    Tour Packages
                                </a>
                            </div>
                            <div className='decoration'>
                                <a  className='Hover' href="/agencies" color="inherit">
                                Travel Agencies
                                </a>
                            </div>
                        </div> 
                    </div>

                    <div> 
                    <img src={footerImg} alt="footerImg" id="footerImg"/>
                    </div>     
        </footer>
    )
}
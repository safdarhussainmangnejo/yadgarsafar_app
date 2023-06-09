import React from 'react';
import mountain from '../images/Slider/mountain.jpg';
import gorakhHill from '../images/Slider/gorakhHill.jpeg';
import mosque from '../images/Slider/mosque.jpg';
import umerkotFort from '../images/Slider/umerkotFort.jpeg';
import lahore from '../images/Slider/lahore.jpg';
import islamabad from '../images/Slider/islamabad.jpg';
import '../index.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Slider = () => {

  const [search, setSearch] = useState("");
  const [departing, setDeparting] = useState("");
  const [returning, setReturning] = useState("");
  const [tourCategory, setTourCategory] = useState("");
  const navigate = useNavigate();

return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className='searchBar' data-aos="zoom-in-up">


          <div className="g-0">

              <div className='row'>
              
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 styyle'>
                <TextField
                    id="demo-helper-text-aligned"
                    label="Search"
                    value={search}
                    onChange={e => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>

                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 styyle'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Departing"
                    value={departing}
                    onChange={val2 => {
                      setDeparting(val2.toISOString());
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                </div>

                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 styyle'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Returning"
                    value={returning}
                    onChange={val3 => {
                      setReturning(val3.toISOString());
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                </div>

                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 styyle'>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tour Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={tourCategory}
                      label="Tour Type"
                      onChange={(e)=> setTourCategory(e.target.value)}
                    >
                      <MenuItem value={"Cultural Tour"}>Cultural Tour</MenuItem>
                      <MenuItem value={"Tracking Tour"}>Tracking Tour</MenuItem>
                      <MenuItem value={"Honeymoon Tour"}>Honeymoon Tour</MenuItem>
                      <MenuItem value={"Adventurous Tour"}>Adventurous Tour</MenuItem>
                      <MenuItem value={"Summer Tour"}>Summer Tour</MenuItem>
                      <MenuItem value={"Winter Tour"}>Winter Tour</MenuItem>
                      <MenuItem value={"Spring Tour"}>Spring Tour</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                </div>
              </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 styyle cntr'>
                <Button onClick={() => {
                  navigate(`/packages/${search}/${tourCategory}/${departing}/${returning}`)
                  
                } } variant="contained" id="searchButton" size="large">&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;&nbsp; <TravelExploreIcon/></Button>
              </div>
            </div>
            </div>

        
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="1200" interval={1000}>
            <h1 className='titles' > Explore Undiscovered Places <br/> in Pakistan</h1>

            <img src={mountain} className="d-block w-100" style={{height:'725px'}} alt="image1"/>
          </div>
          <div className="carousel-item" interval={1000}>
            <h1 className='titles' > Visit Gorakh Hill & Enjoy the <br/> Nature</h1>
            <img src={gorakhHill} className="d-block w-100" style={{height:'725px'}} alt="image2"/>
          </div>
          <div className="carousel-item" interval={1000}>
            <h1 className='titles' > Faisal Mosque Islamabad <br/> Pakistan</h1>
            <img src={mosque} className="d-block w-100" style={{height:'725px'}} alt="image3"/>
          </div>
          <div className="carousel-item" interval={1000}>
            <h1 className='titles' > Yes It's Umerkot Fort</h1>
            <img src={umerkotFort} className="d-block w-100" style={{height:'725px'}} alt="image3"/>
          </div>
          <div className="carousel-item" interval={2000}>
            <h1 className='titles' > It's Beautiful, It's Pakistan </h1>
            <img src={lahore} className="d-block w-100" style={{height:'725px'}} alt="image3"/>
          </div>
          <div className="carousel-item" interval={1000}>
            <h1 className='titles' > Feel the Wonderful Weather of Capital</h1>
            <img src={islamabad} className="d-block w-100" style={{height:'725px'}} alt="image3"/>
          </div>
        </div>
        
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
  </div>
    </>
);
}
export default Slider;
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import { Collapse } from '@mui/material';
import PackageCard from "./PackageCard";
import '../index.css';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import {makeStyles} from '@material-ui/core';

// const useStyle = makeStyles ({
//   textF : {
//     color: 'red',
//     backgrondColor : "red"
//   }
// })

const Packages = () => {
    const param = useParams();

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(param.name);
    const [departing, setDeparting] = useState(param.departing != "" ? param.departing : "");
    const [returning, setReturning] = useState(param.returning); 
    const [tourCategory, setTourCategory] = useState(param.tourcategory); // param.tourcategory
    
    // const [groupTour, setGroupTour] = useState(null);
    // const [privateTour, setPrivateTour] = useState(null);
    const [tourType, setTourType] = useState(null);
    const [age, setAge] = useState(null);
    const [province, setProvince] = useState(null);
    
    const GroupTour = (event) => {
        const {checked, value} = event.target;

        checked ?
        setTourType(value)
        :
        setTourType(null)
        
    }
    
    const PrivateTour = (event) => {
        const {checked, value} = event.target;

        checked ?
        setTourType(value)
        :
        setTourType(null)

    }

    const Sindh = (event) => {
        const {checked, value} = event.target;

        checked ?
        setProvince(value)
        :
        setProvince('')
    }
    
    const Punjab = (event) => {
        const {checked, value} = event.target;

        checked ?
        setProvince(value)
        :
        setProvince('')
    }

    const Balochistan = (event) => {
        const {checked, value} = event.target;

        checked ?
        setProvince(value)
        :
        setProvince('')
    }
    
    const KPK = (event) => {
        const {checked, value} = event.target;

        checked ?
        setProvince(value)
        :
        setProvince('')
    }

    const GilgitBaltistan = (event) => {
        const {checked, value} = event.target;

        checked ?
        setProvince(value)
        :
        setProvince('')
    }

    const AzadKashmir = (event) => {
        const {checked, value} = event.target;
        
        checked ?
        setProvince(value)
        :
        setProvince('')
    }

    const Islamabad = (event) => {
        const {checked, value} = event.target;

        checked ?
        setProvince(value)
        :
        setProvince('')
    }

    // console.log('Group Tour : ',groupTour);
    // console.log('Private Tour : ',privateTour);
    // console.log('age selected : ',age);
    // console.log('Islamabad : ',islamabad)

    return (
        <>
            <Navbar />

            {/* Search Bar....................<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <div className="searchBar2">

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
                                        selected={tourCategory}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={tourCategory}
                                        label="Tour Type"
                                        onChange={(e) => setTourCategory(e.target.value)}
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
                </div>

            </div>
            <br /><br /><br /><br /><br />
            {/* <br/><br/> */}

            <div style={{ width: "100%", height: "80px" }}></div>
            <div className="row g-0">



                {/* space left side */}
                <div className="col-1"></div>

                {/* sort & filter */}
                <div className="col-3" style={{ border: '1px solid gray', borderRadius: "8px", margin: '10px', paddingLeft: "10px" }}>

                    <h3 style={{ color: '#0d6efd', paddingTop: '8px' }}>Filters</h3>
                    <hr style={{ color: '#0d6efd' }} />
                    <h4>Tour Type</h4>
                    <hr style={{ color: '#0d6efd' }} />

                    <div style={{ paddingLeft: '25px' }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox value="Group Tour" onChange={GroupTour}/> } label="Group Tour"/>
                            <FormControlLabel control={<Checkbox value="Private Tour" onChange={PrivateTour}/> } label="Private Tour"/>
                        </FormGroup>
                    </div>

                    <hr style={{ color: '#0d6efd' }} />

                    <h4>Age Range</h4>

                    <hr style={{ color: '#0d6efd' }} />

                    <div className="row g-0">
                        <div className="col-6">

                            <div style={{ margin: '8px', padding: 'auto' }}>
                                <Button variant="outlined" onClick={() => setAge('Under 18')} fullWidth>Under 18</Button>
                            </div>

                            <div style={{ margin: '8px', padding: 'auto' }}>
                                <Button variant="outlined" onClick={() => setAge('31-40')} fullWidth>31 - 40</Button>
                            </div>

                            <div style={{ margin: '8px', padding: 'auto' }}>
                                <Button variant="outlined" onClick={() => setAge('51-70')} fullWidth>51 - 70</Button>
                            </div>

                        </div>
                        <div className="col-6">

                            <div style={{ margin: '8px', padding: 'auto' }}>
                                <Button variant="outlined" onClick={() => setAge('18-30')} fullWidth>18 - 30</Button>
                            </div>

                            <div style={{ margin: '8px', padding: 'auto' }}>
                                <Button variant="outlined" onClick={() => setAge('41-50')} fullWidth>41 - 50</Button>
                            </div>

                            <div style={{ margin: '8px', padding: 'auto' }}>
                                <Button variant="outlined" onClick={() => setAge('18-50')} fullWidth>18 - 50</Button>
                            </div>
                        </div>
                    </div>

                    <hr style={{ color: '#0d6efd' }} />

                    <h4>Regions</h4>

                    <hr style={{ color: '#0d6efd' }} />


                    <div style={{ paddingLeft: '25px' }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox value="Sindh" onChange={Sindh}/>} label="Sindh" />
                            <FormControlLabel control={<Checkbox value="Punjab" onChange={Punjab}/>} label="Punjab" />
                            <FormControlLabel control={<Checkbox value="Balochistan" onChange={Balochistan}/>} label="Balochistan" />
                            <FormControlLabel control={<Checkbox value="KPK" onChange={KPK}/>} label="KPK" />
                            <FormControlLabel control={<Checkbox value="Gilgit Baltistan" onChange={GilgitBaltistan}/>} label="Gilgit Baltistan" />
                            <FormControlLabel control={<Checkbox value="Azad Kashmir" onChange={AzadKashmir}/>} label="Azad Kashmir" />
                            <FormControlLabel control={<Checkbox value="Islamabad" onChange={Islamabad}/>} label="Islamabad" />
                        </FormGroup>
                    </div>
                </div>

                {/* packages card */}
                <div className="col-7" style={{ border: '1px solid gray', borderRadius: "8px", margin: '10px' }}>

                    <PackageCard packName={search} age={age} type={param.type} tourCategory={tourCategory} departing={departing} returning={returning} tourType={tourType} ageRange={age} province={province} />
                    <br />

                </div>

            </div>

            {/* space right */}
            <div className="col-1"></div>

            {/* </div> */}


            {/* <Footer/> */}
        </>
    )
}
export default Packages;
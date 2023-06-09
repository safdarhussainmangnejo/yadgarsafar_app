import '../index.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import BasicSelect from './SelectBox';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


const Searchbar = ()=>{
  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  // const classes = useStyle();
    return(
      <>
          <div className="g-0">

            <div className='row'>
            
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 styyle'>
              <TextField
                  id="demo-helper-text-aligned"
                  label="Search"
                />
              </div>

              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 styyle'>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Departing"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              </div>

              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 styyle'>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Returning"
                  value={value2}
                  onChange={(newValue) => {
                    setValue2(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> 
              </div>

              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 styyle'>
              <BasicSelect/>
              </div>
            </div>

          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 styyle cntr'>
              <Button variant="contained" id="searchButton" size="large">&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;&nbsp; <TravelExploreIcon/></Button>
            </div>
          </div>
          </div>
      </>
    );
}
export default Searchbar;
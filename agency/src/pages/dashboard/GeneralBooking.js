import { useState, useEffect } from 'react';
import * as React from 'react';
// material
import { Grid, Container } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import UserList from './UserList';
import TouristsList from './TouristsList';
import {

  BookingTotal,
  BookingPending,
  BookingDetails,
  BookingCompleted,
  BookingBookedTrips,
  BookingTotalIncomes,
  BookingTripsAvailable,
  BookingNewestBooking,
  BookingCheckInWidgets,
} from '../../components/_dashboard/general-booking';



// ----------------------------------------------------------------------

export default function GeneralBooking() {
  const { themeStretch } = useSettings();
  const local = JSON.parse(localStorage.getItem('user'));
  console.log("localSafadar : ",local)

  // ----------------------------------------------------------------------
const [packages, setPackages] = useState({});

useEffect(() => {
  fetch('http://localhost:8080/getUsers')
  .then((response) => response.json())
  .then((data) => setPackages(data));
}, []);

  return (
    

  //      local.role === 'agency' ? 

  //     <Page title="Bookings Page">
  //     <Container maxWidth={themeStretch ? false : 'xl'}>
  //       <Grid container spacing={3}>
  //         <Grid item xs={12} md={4}>
  //           <BookingTotal />
  //         </Grid>

  //         <Grid item xs={12} md={4}>
  //           <BookingPending />
  //         </Grid>

  //         <Grid item xs={12} md={4}>
  //           <BookingCompleted />
  //         </Grid>

  //         <Grid item xs={12} md={8}>
  //           <Grid container spacing={3}>
  //             <Grid item xs={12} md={6}>
  //               <BookingTotalIncomes />
  //             </Grid>

  //             <Grid item xs={12} md={6}>
  //               <BookingBookedTrips />
  //             </Grid>

  //             <Grid item xs={12} md={12}>
  //               <BookingCheckInWidgets />
  //             </Grid>
  //           </Grid>
  //         </Grid>

  //         <Grid item xs={12} md={4}>
  //           <BookingTripsAvailable />
  //         </Grid>

  //         <Grid item xs={12}>
  //           <UserList tableName="Bookings List" />
  //         </Grid>

  //         <Grid item xs={12}>
  //           <BookingNewestBooking />
  //         </Grid>

  //       </Grid>
  //     </Container>
  //   </Page>
  // : <h1>Hello Safdar</h1>
   <TouristsList/>
  );
}

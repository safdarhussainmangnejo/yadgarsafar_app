import { useState, useEffect } from 'react';
// material
import { Container, Grid, Stack } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
// import LoadUser from '../../hooks/loadUsers'
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { BookingDetails } from '../../components/_dashboard/general-booking';
import {
  AppWelcome,
  AppTotalRevenue,
  AppTotalOrders,
  AppPendingOrders,
  AppTotalPackages
} from '../../components/_dashboard/general-app';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const userData = user.data;
  const [users, setUsers] = useState({});
  const [packages, setPackages] = useState([]);
  const [tourists, setTourists] = useState({});
  const { themeStretch } = useSettings();
  const [numberOfPaidOrders, setNumberOfPaidOrders] = useState(0);
  const [totalNumberOfPackages, setTotalNumberOfPackages] = useState(0);
  const [totalNumberOfAgencies, setTotalNumberOfAgencies] = useState(0);
  const [AgencyPackages, setAgencyPackages] = useState(0);
  const [AgencyPaidPackages, setAgencyPaidPackages] = useState(0);
  const [AgencyActiveUsers, setAgencyActiveUsers] = useState(0);
  const [agencyRevenue, setAgencyRevenue] = useState(0);
  
  // let totalNumberOfPackages=0;

  const userLocalStorage = JSON.parse(localStorage.getItem('user'));
  console.log('Local Storage UserData: ', userLocalStorage);
  console.log('useAuth User: ', user?.data?.companyname);
  const userLocalEmail = userLocalStorage?.email;
 

  const searchAgencybyId = () => {
    fetch(`http://localhost:8080/searchAgencybyEmail/${userLocalEmail}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          console.log('User Not found----------');
        } else {
          setUsers(data);
          // JSON.stringify(localStorage.setItem('agency',data));
        }
      });
    console.log('Auth User in General App2--------: ', user);
  };

  const getAllTouristData = () => {
    fetch(`http://localhost:8080/getTourists`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          console.log('Tourist Not found----------');
        } else {
          setTourists(data);
        }
      });
  };

const getTotalNumberOfPaidOrders = () => {
  fetch(`http://localhost:8080/getTotalNumberOfPaidOrders`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log('Tourist Not found----------');
      } else {
        console.log(data)
        setNumberOfPaidOrders(data.totalNumberOfPaidOrders);
      }
    });
};

const getTotalNumberOfPackages =()=>{
  fetch(`http://localhost:8080/getTotalNumberOfPackages`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log('Tourist Not found----------');
      } else {
        setTotalNumberOfPackages(data.totalNumberOfPackages);
      }
    });
}

const getTotalNumberOfAgencies =()=>{
  fetch(`http://localhost:8080/getTotalNumberOfAgencies`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log('Tourist Not found----------');
      } else {
        setTotalNumberOfAgencies(data.totalNumberOfAgencies);
      }
    });
}

const getTotalNumberOfAgencyPackages =()=>{
  fetch(`http://localhost:8080/getTotalNumberOfAgencyPackages/${userLocalEmail}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log('Package Not found----------');
      } else {
        setAgencyPackages(data.totalNumberOfPackages);
        console.log("totalNumberOfPackages: ", data.totalNumberOfPackages)
      }
    });
}

const getTotalNumberOfAgencyPaidOrders =()=>{
  fetch(`http://localhost:8080/getTotalNumberOfAgencyPaidOrders/${userLocalEmail}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log('Package Not found----------');
      } else {
        setAgencyPaidPackages(data.totalNumberOfPaidOrders);
        console.log("ordersPending: ", data.totalNumberOfPaidOrders)
      }
    });
}

const getTotalNumberOfActiveClients =()=>{
  fetch(`http://localhost:8080/getTotalNumberOfActiveClients/${userLocalEmail}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log('Package Not found----------');
      } else {
        setAgencyActiveUsers(data.totalNumberOfActiveClients);
        console.log("active users: ", data.totalNumberOfActiveClients)
      }
    });
}

const getAgencyRevenue =()=>{
  fetch(`http://localhost:8080/getAgencyRevenue/${userLocalEmail}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log('Package Not found----------');
      } else {
        setAgencyRevenue(data.totalRevenue);
      }
    });
}


const totalTourists = tourists.length;

  useEffect(() => {
    if (userData?.role === 'agency') {
      searchAgencybyId();
    }

    getAllTouristData();
    getTotalNumberOfPaidOrders();
    getTotalNumberOfPackages();
    getTotalNumberOfAgencies();
    getTotalNumberOfAgencyPackages();
    getTotalNumberOfAgencyPaidOrders();
    getTotalNumberOfActiveClients();
    getAgencyRevenue();
  }, []);

  
  return (
    <>
      
      <Page title="Agency Dashboard">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {userLocalStorage?.role && userLocalStorage?.role === 'admin' ? <AppWelcome /> : <AppWelcome />}
            </Grid>
            
            <Grid item xs={12} md={3}>
              {userLocalStorage?.role && userLocalStorage.role === 'admin' ? (
                <AppPendingOrders title="Packages Booked" TOTAL_USER={numberOfPaidOrders} />
              ) : (
                <AppPendingOrders title="Active Clients" TOTAL_USER={AgencyActiveUsers} />
              )}
            </Grid>

            <Grid item xs={12} md={3}>
              {userLocalStorage?.role && userLocalStorage.role === 'admin' ? (
                <AppTotalOrders title="Total Companies" totalNumber={totalNumberOfAgencies} />
              ) : (
                <AppTotalOrders title="Orders Completed" totalNumber={AgencyPaidPackages} />
              )}
            </Grid>

            <Grid item xs={12} md={3}>
              {userLocalStorage?.role && userLocalStorage.role === 'admin' ? (
                <AppTotalRevenue title="Total Users" totalNumber={totalTourists} />
              ) : (
                <AppTotalRevenue title="Revenue" totalNumber={agencyRevenue} />
              )}
            </Grid>

            <Grid item xs={12} md={3}>
              {userLocalStorage?.role && userLocalStorage.role === 'admin' ? (
                <AppTotalPackages title="Total Packages" totalNumber={totalNumberOfPackages} />
              ) : (
                <AppTotalPackages title="Total Packages" totalNumber={AgencyPackages} />
              )}
            </Grid>

            <Grid item xs={12}>
              <BookingDetails Useremail={userLocalEmail} />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </>
  );
}

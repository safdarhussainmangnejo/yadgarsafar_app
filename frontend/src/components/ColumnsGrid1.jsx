import React from 'react';
import RecommendedTripsCard from './RecommendedTripsCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ColumnsGrid() {

  const [trips, setTrips] = useState([]);
  const [count, setCount] = useState(0);


  const fetchData = async () => {

    let data = await axios.get('http://localhost:8080/getUsers')

    setTrips(data.data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>

      <div className='row g-0' style={{marginTop: 5}}>
        {
          trips.length > 0 && trips.map(prof => (

            // prof.packages.slice(2, 4).map(pckg => {
            // prof.packages.map(pckg => 
              prof.packages.slice(2, 4).map(pckg => {
              return <>
                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                  <RecommendedTripsCard id={pckg._id} image={pckg.image} name={pckg.packageName} duration={pckg.packageDuration} price={pckg.price} />
                </div><br/><br/><br/><br/>
              </>
            })
          ))
        }
      </div><br/><br/>
    </>
  )
}
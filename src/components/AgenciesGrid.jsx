import React from 'react';
import AgenciesCard from './AgenciesCard';
import Navbar from './Navbar';
import Footer from './Footer';
import {useState, useEffect} from 'react';
import axios from 'axios';


export default function AgenciesGrid() {

  const [agency, setAgency] = useState([])


    const fetchData = async () => {

        let data = await axios.get('https://yadgarsafar-backend.netlify.app/getUsers')

        setAgency(data.data)
    }


    useEffect(() => {
        fetchData()
    }, [])

  return (
    <>
    <Navbar/>
    <div style={{width: "100%", height: "80px"}}></div>
    <br/>
    <h1 style={{marginLeft:'20px'}}>TOUR AGENCIES & OPERATORS</h1>

<div style={{margin:'30px'}}>

  <div className='row g-0'>


    {
        agency.length > 0 && agency.map(prof => {
        return <>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <AgenciesCard title={prof.companyName} desc={prof.companyDescription} icon={prof.companyImage} /> 
            </div>
        </>
      })
    }
  </div>
  
</div>

<Footer/>
</>
  );
}

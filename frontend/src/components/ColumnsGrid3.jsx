import React from 'react';
import ExploreProvinces from './ExploreProvinces';
import khaberPass from '../images/Provinces/khaberPass.jpg';
import quiadmazar from '../images/Recommended/quaidMazar.jpg';
import minarEpakistan from '../images/Provinces/minarEpakistan.jpg';
import gilgitBaltistan from '../images/Provinces/gilgitBaltistan.jpg';
import Islamabad from '../images/Provinces/Islamabad.jpg';
import quetta from '../images/Provinces/quetta.jpg';

export default function ColumnsGrid3() {

  return (
    <>
    <div className='row g-0'>

      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>          
        <ExploreProvinces province="kpk" image={khaberPass} name={"KPK"} />
      </div>

      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="sindh" image={quiadmazar} name={"Sindh"} />
      </div>

      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>          
        <ExploreProvinces province="gilgitBaltistan" image={gilgitBaltistan} name={"Gilgit Baltistan"} />
      </div>


      {/* <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="gilgitBaltistan" image={gilgitBaltistan} name={"Gilgit Baltistan"} />
      </div> */}
    </div >

    <div className='row g-0'>

      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="baluchistan" image={quetta} name={"Baluchistan"} />
      </div>

      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="punjab" image={minarEpakistan} name={"Punjab"} />
      </div>

      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="islamabad" image={Islamabad} name={"Islamabad"} />
      </div>

      {/* <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="gilgitBaltistan" image={gilgitBaltistan} name={"Gilgit Baltistan"} />
      </div> */}
    </div >

    {/* <div className='row g-0'>

      <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>          
        <ExploreProvinces province="kpk" image={khaberPass} name={"KPK"} />
      </div>

      <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="sindh" image={quiadmazar} name={"Sindh"} />
      </div>

      <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="punjab" image={minarEpakistan} name={"Punjab"} />
      </div>

      <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <ExploreProvinces province="gilgitBaltistan" image={gilgitBaltistan} name={"Gilgit Baltistan"} />
      </div>
    </div > */}
    </>
  )
}
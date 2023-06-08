import React from 'react';
import RecommendedTripsCard from './RecommendedTripsCard';

export default function ColumnsGrid2() {
  return (
    <div className='row g-0'>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
      <RecommendedTripsCard/> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
      <RecommendedTripsCard/> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
      <RecommendedTripsCard/> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
      <RecommendedTripsCard/> 
    </div>
</div>
  );
}

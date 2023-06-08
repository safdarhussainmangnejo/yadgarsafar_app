import React from 'react';
import ServicesCard from './ServicesCard';
import bestTour from '../images/Services/bestTour.png';
import affordable from '../images/Services/affordable.png';
import securePayment from '../images/Services/securePayment.png';
import service24 from '../images/Services/service24.png';
import { LocalFireDepartment } from '@mui/icons-material';

export default function ServicesGrid() {
  return (
    <div className='row g-0'>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'  data-aos="zoom-in-up">
      <ServicesCard title="Best Packages" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text." icon={bestTour} /> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'  data-aos="zoom-in-up">
      <ServicesCard title="Affordable Price" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text." icon={affordable} /> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'  data-aos="zoom-in-up">
      <ServicesCard title="Secure Payment" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text." icon={securePayment} /> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'  data-aos="zoom-in-up">
      <ServicesCard title="24/7 Support" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text." icon={service24} /> 
    </div>
</div>
  );
}

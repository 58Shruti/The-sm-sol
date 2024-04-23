
import Button from '@mui/material/Button';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';

function Homepage() {

  return (
    
    <>
    <div className='w-full' >

   <div className='w-full h-screen container relative mb-10'
   data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
   >
    <img className='w-full h-screen ' src='\src\Components\Images\hero.jpg'/>
     <div className=' absolute  top-28 left-10  text-center'> 
     <p className=' text-[6vw]  font-bold text-[#FFFFFF]'> S.M. SOLUTION </p> 
    <p className='text-[4vw] font-regular text-white leading-none  '> SOFTWARE & MANPOWER</p>
    </div> 
   </div>

  {/*VISION  */}

  <div className='w-full container  flex gap-4  box-border mb-10'
   data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
  >
<div className=' w-1/2  pt-20 text-center'>
    <h1 className='text-[4vw] font-semibold mb-8'
    data-aos="zoom-in"
    >OUR VISION</h1>
    <p className='text-[2vw] text-[#100F51] leading-none tracking-tight'
    data-aos="zoom-in"
    >Become the best service provider in the IT industry after-sales. We want to make an easy world in which you can remove all barriers to your Business.</p>
</div>
<div className='  w-1/2'>
    <img src='\src\Components\Images\WhatsApp-Image-2021-09-13-at-3.07.05-PM.png'/>
</div>

</div>


{/* ---------------work with us------------ */}
   <div className='container w-full flex'
    data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
   >

<div className='w-1/2'
 data-aos="zoom-in"
>
        <img src='\src\Components\Images\choose.jpg'/>
    </div>

<div className='w-1/2 pt-20 '
 data-aos="zoom-in"
>
    <p className='text-[4vw] font-semibold text-[#7E91D3] mb-8'>Why work with Us ?</p>
    <p className='text-[1.5vw] leading-none text-[#533EAA]'>
    During the years, we have connected with amazing clients to enable them with robust web and mobile applications to which has delivered out-standing results for their businesses. Our expert team of mobile and web developers don’t just build things, we build them with excellence has created award winning mobile and web apps.<br/><br/>
 <ArrowForwardIosIcon/> Experienced Team<br/>
<ArrowForwardIosIcon/> Work, Quality<br/>
<ArrowForwardIosIcon/> Timely Delivery<br/>
<ArrowForwardIosIcon/> Cost Effective Services<br/>
<br/>
<div className='text-center'>
<Button variant="contained" color="secondary" >
<NavLink to='/contact'>

  CONTACT US
</NavLink>
</Button>

</div>
    </p>
</div>
    
   </div>



    </div>
   
    </>
  )
}

export default Homepage;

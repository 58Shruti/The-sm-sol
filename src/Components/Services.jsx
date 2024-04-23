import React from 'react'

function Services() {
  return (
   
    <div className='w-full '>
      <div className=' relative w-full h-screen '
      
      >
      <img className=' w-full h-4/5' src='\src\Components\Images\sevices.jpg'/>
      <div className='absolute bg-[#9A358F] opacity-50 h-4/5 w-full top-0 left-0 '> 
      </div>
      <p className='absolute text-zinc-100 text-[7vw] font-bold top-1/2 left-1/2 -translate-x-[50%] -translate-y-[75%]'
      
      >Services</p>
      </div>

{/*-------- cards -------*/}

{/* -----------1------- */}
<div className='mx-5'>
    <div className=' flex gap-4 mx-5 ps-5'  data-aos="fade-left">
      <div className=' w-3/5 my-5 '>
      <p className='text-[3vw] font-semibold text-[#9A358F] mb-8'>Web Design & Development</p>
      <p className='text-[1.8vw] text-[#473E91] leading-none tracking-tight'>We offer superior web applications tailored to various screen sizes. Our web services encompass rich-feature solutions, assisting businesses with daily operations while ensuring effortless readability and smooth touch navigation.
      <br/>
<br/>
      <ul className='list-disc'>
      <li>Web Designing </li>
      <li>ERP Software</li>
      <li>E-Commerce</li>
      <li>Mobile Backend / API Development</li>
      <li>CRM Application</li>
      </ul>
      </p>
    </div>

  <div className='w-2/5'>
    <img  className='h-[70vh] w-full' src='\src\Components\Images\serviceweb.jpg'/>
  </div>
</div>



{/* -------------2----------------- */}


<div className='w-full flex gap-5' data-aos="fade-right">

<div className='w-2/5 my-5'>
    <img  className='h-[70vh] w-full' src='\src\Components\Images\serviceapp.jpg'/>
  </div>

<div className=' w-3/5 '>
      <p className='text-[3vw] font-semibold text-[#9A358F] mb-8 mt-5'>Mobile Apps Development</p>
      <p className='text-[1.8vw] text-[#473E91] leading-none tracking-tight'>We deliver mobile applications that are fast, and user-friendly. We develop unique applications according to your needs and requirements. We understand your customers and provide you best applications that have unique and powerful interface. We build apps that support almost every platform like iOS, Android and Windows.
      <ul className='list-disc'>
      <li> iOS App Development</li>
      <li>Android App Development</li>
      <li>iOS App Development</li>
      <li>Hybrid Apps</li>
      </ul>
      </p>
    </div>

  
</div>

{/* ---------------3-------------------- */}

<div className=' flex gap-4  ps-5' data-aos="fade-left">
      <div className=' w-3/5 my-5'>
      <p className='text-[3vw] font-semibold text-[#9A358F] mb-8'>Digital Marketing</p>
      <p className='text-[1.8vw] text-[#473E91] leading-none tracking-tight'>We pens down stories for brands to build a trust with customers.<br/> Our Digital Marketing Services bring up your business presence<br/> on every possible online channel. Our experts are certified<br/> marketers and they comprehend the customer’s journey <br/> from awareness to consideration and purchase. <br/>From 
       to Paid marketing campaigns we do everything<br/> to boost up the value of a brand.
<br/>
<br/>
<ul className='list-disc'>
  <li>BRAND DEVELOPMENT</li>
  <li> GREATER EXPOSURE </li>
  <li> USER ENGAGEMENT</li>
  <li>ORGANIC & PAID PROMOTIONS </li>
  <li>INCREASED SALES </li>
  <li>INCREASED SALES.</li>
  
</ul>
      </p>
    </div>
  <div className='w-2/5'>
    <img  className='h-[70vh] w-full' src='\src\Components\Images\servicedigimarket.jpg'/>
  </div>
</div>

{/* ----------------4----------------------- */}


<div className='w-full flex gap-5' data-aos="fade-right">

<div className='w-2/5 my-5'>
    <img  className='h-[70vh] w-full' src='\src\Components\Images\serviceapp.jpg'/>
  </div>

<div className=' w-3/5 '>
      <p className='text-[3vw] font-semibold text-[#9A358F] mb-8'>Web Hoisting</p>
      <p className='text-[1.8vw] text-[#473E91] leading-none tracking-tight'>We deliver mobile applications that are fast, and user-friendly. We develop unique applications according to your needs and requirements. We understand your customers and provide you best applications that have unique and powerful interface. We build apps that support almost every platform like iOS, Android and Windows.
      <ul className='list-disc'>
      <li> iOS App Development</li>
      <li>Android App Development</li>
      <li>iOS App Development</li>
      <li>Hybrid Apps</li>
      </ul>
      </p>
    </div>
</div>



{/* --------------5---------------- */}

<div className=' flex gap-4  ps-5' data-aos="fade-left">
      <div className=' w-3/5 my-5'>
      <p className='text-[3vw] font-semibold text-[#9A358F] mb-8'>Search Engine Optimization</p>
      <p className='text-[1.8vw] text-[#473E91] leading-none tracking-tight'>The process involves maximizing the number of visitors <br/> to a particular website by ensuring that the site appears high <br/> on the list of results returned by a search engine.<br/> This necessitates making your website stand out within your industry in order to attract more search traffic back to you.
      </p>
    </div>

    <div className='w-2/5'>
    <img  className='h-[70vh] w-full' src='\src\Components\Images\serviceseo.jpg'/>
  </div>
 
</div>
</div>

    </div>
  )
}

export default Services;

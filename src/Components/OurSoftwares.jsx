import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function OurSoftwares() {
  return (
    <div >
      <div className=' relative w-full h-[80vh]'>

        <img className=' w-full h-[80vh] object-fill' src='\src\Components\Images\oursoftwarehero.jpg'/>
        <div className='bg-blue-400 w-full h-[80vh] absolute top-0 left-0 opacity-60'>
        </div>
        <div className='h-[50vh] mt-2 absolute top-[30%] left-[30%]' 
        data-aos="fade-up">
            <p className='text-[5vw] text-white leading-none tracking-tight font-bold text-center'>OUR SOFTWARES</p>
        </div>
     
      </div>

{/* ----------------cards-------------------- */}
     <div className='container bg-[#EEEEEE] flex flex-wrap gap-5 justify-between py-4'>

     {/* ----------------card 1-----rental dress----------- */}
      <div 
      data-aos="flip-up"
       data-aos-duration="500">
      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="\src\Components\Images\rentalstpre.jpg"
          alt="rental store"
          sx={{ maxWidth: 300 ,height : 250 }}
        />
        <CardContent sx={{ width: 345, minHeight: 200 }}>
          <Typography gutterBottom variant="h5" component="div" className='text-center text-[#9A358F] font-bold'>
          RENTAL DRESS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Manage All Your Dresses Through A Single Rental Software. Simplest Software  Ever. You can easily Attach Your High-Resolution Image & Easily Show it to Your Customer. Get all Details in Front of You about All Dress.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
{/* -------------CARD 2----------machine---------- */}
<div>
      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="\src\Components\Images\machinemanag.jpg"
          alt="machine"
          sx={{ maxWidth: 300 ,height : 250 }}
        />
        <CardContent sx={{ width: 345, minHeight: 200 }}>
          <Typography gutterBottom variant="h5" component="div" className=' text-[#9A358F] font-bold'>
          MACHINE MANAGEMENT
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Manage All Your Machinery Tasks Through A Single Software. Simplest Software. You can Easily Track Where Your Machine Run & Only You Can Track It. Easily Get all Details in Front of You about Your all Machine.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>

{/* ------------------CARD 3---------construction----------- */}
<div>
      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="\src\Components\Images\constructmnag.jpg"
          alt="construction "
          sx={{ maxWidth: 300 ,height : 250 }}
        />
        <CardContent sx={{ width: 345, minHeight: 200 }}>
          <Typography gutterBottom variant="h5" component="div" className=' text-[#9A358F] font-bold'>
          CONSTRUCTION MANAGEMENT
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Not Only 1 Module Here You Can Get 5 Module in Your Pocket By Which You Can Easily Manage All Your Problem. Module Have  Admin | HR | Machinery | RCM | Production MAnagement
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>


      {/* ---------------CARD 4 ----Matrimonial----------------- */}

      <div>
      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="\src\Components\Images\softwarematrimoial.jpg"
          alt="matrimonial"
          sx={{ maxWidth: 300 ,height : 250 }}
        />
        <CardContent sx={{ width: 345, minHeight: 200 }}>
          <Typography gutterBottom variant="h5" component="div" className=' text-[#9A358F] font-bold'>
          MATRIMONIAL SOFTWARE
          </Typography>
          <Typography variant="body2" color="text.secondary" className='capitalize'>
          Elevate your matrimonial website with our bespoke software solutions. Our expertise lies in crafting tailored platforms that redefine the matchmaking experience, enabling seamless connections .Trust us to bring your vision to life.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>



   {/* ----------------CARDS --------- ERP------------- */}

      <div>
      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image="\src\Components\Images\erpmanage.jpg"
          alt="Erp management"
          sx={{ maxWidth: 300 ,height : 250 }}
        />
        <CardContent sx={{ width: 345, minHeight: 200 }}>
          <Typography gutterBottom variant="h5" component="div" className=' text-[#9A358F] font-bold'>
          EASY ERP
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Manage All Your Accounting Tasks Through A Single Software. Simplest Software Ever. You Can Whatsapp Your Bill on Time of Billing. Designable Bill as per Your Wish. Mailing Labels, Text Mode Printing. It’s Also Easy to Learn.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>


{/* ---------------CARDD 6 ---------- JOB PORTAL------------ */}
<div>
      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="\src\Components\Images\jobportal.jpg"
          alt="job portal"
          sx={{ maxWidth: 300 ,height : 250 }}
        />
        <CardContent sx={{ width: 345, minHeight: 200 }}>
          <Typography gutterBottom variant="h5" component="div" className=' text-[#9A358F] font-bold'>
          JOB PORTAL
          </Typography>
          <Typography variant="body2" color="text.secondary" className='capitalize'>
      We offers cutting-edge software solutions tailored for efficient job portal management ,streamlining recruitment process with user-friendly interfaces and powerful functionalities.Simplify your hiring journey with our innovative technology.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>

      </div>

      {/* -------FOOT CONTENT----------- */}
    <div className='w-full  bg-red-400 relative'>
      <img src='\src\Components\Images\softwarefoot.png'/>
    <div className='w-[100%] h-full bg-black opacity-40 absolute top-0 left-0'> </div>

    <div className='px-20 py-5 absolute top-1/3 left-0'>
         <p className='text-white font-bold text-[4vw] tracking-tighter leading-none text-center '>Our Software Helps You to Reduce Your Work Load. We also Customize According to Your Need. Our Softwares are Easy to Adopt.</p>
    </div>

    </div>





        </div>
  )
}

export default OurSoftwares

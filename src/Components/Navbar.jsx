import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

  return (

    <div className='h-28 w-full border-b-2 border-black flex items-center justify-between ps-10' 
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500"
    >

      <div className='h-24 w-20'>
        <img src='\src\Components\Images\logo.png'/>
      </div>

      <div className='lg:flex items-center justify-around  w-1/2 cursor-pointer hidden'>
        
                <NavLink to='/' className={'text-xl font-semibold'}>HOME</NavLink>
                <NavLink to='/services' className={'text-xl font-semibold'}>SERVICES</NavLink>
                <NavLink to='/oursoftware' className={'text-xl font-semibold'}>OUR SOFTWARES</NavLink>
                <NavLink to='/contact' className={'text-xl font-semibold'}>CONTACT US</NavLink>
        
      </div>
      <div className='lg:hidden cursor-pointer'>

       <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="large"
       
      >
        <MenuIcon  style={{fontSize : '40', color:'purple'}} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
       
       <NavLink to="/">
        <MenuItem style={{fontSize : '40', color:'purple'}} onClick={handleClose}>Home</MenuItem>
       </NavLink>
       <NavLink to="/service">
        <MenuItem style={{fontSize : '40', color:'purple'}} onClick={handleClose}>Services</MenuItem>
       </NavLink>
       <NavLink to="/oursoftware">
        <MenuItem style={{fontSize : '40', color:'purple'}} onClick={handleClose}>Our Softwares</MenuItem>
       </NavLink>
       <NavLink to="/contact">
        <MenuItem style={{fontSize : '40', color:'purple'}} onClick={handleClose}>Contact Us</MenuItem>
       </NavLink>
      </Menu>
      </div>

    </div>
  )
}

export default Navbar

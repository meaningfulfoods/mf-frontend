import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { COLORS, BUTTONS } from '../../assets/constants/index';
import { rowdash } from '../../assets/icons';

const Navbar = () => {

  const [topBtn, setTopBtn] = useState(false);

  let activeStyle = {
    border: "none",
    borderRadius: "0px",
    borderBottomWidth: "3px",
    borderBottomStyle: "solid",
    borderBottomColor: "#F49E05",
    marginBottom: "0px",
    paddingBottom: "0px",
  };
  let unActiveStyle = {
    marginBottom: "0px",
    paddingBottom: "0px",
  };

  const handleDropDownBtn = () => {
    console.log(topBtn)
    setTopBtn(!topBtn)
  }

  return (<>
    <div className="topnav" id="myTopnav">
      <NavLink to='/' className='topnavItemHome'>meaningful<br /> foods</NavLink>
      <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : unActiveStyle} className='topnavItem topnavItemHide'>Home</NavLink>
      <NavLink to='/products' style={({ isActive }) => isActive ? activeStyle : unActiveStyle} className='topnavItem topnavItemHide'>Products</NavLink>
      <NavLink to='/services' style={({ isActive }) => isActive ? activeStyle : unActiveStyle} className='topnavItem topnavItemHide'>Customer services</NavLink>
      <NavLink to='/contact' style={({ isActive }) => isActive ? activeStyle : unActiveStyle} className='topnavItem topnavItemHide'>Contact Us</NavLink>
      <NavLink to='/about' style={({ isActive }) => isActive ? activeStyle : unActiveStyle} className='topnavItem topnavItemHide'>About us</NavLink>

      {topBtn && <>
        <div className="nav-dropdown" style={{ marginTop: '50px' }}>
          <div className="nav-dropdown-content">
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/products' >Products</NavLink>
            <NavLink to='/services'>Customer services</NavLink>
            <NavLink to='/about'>About us</NavLink>
          </div>
        </div>
      </>
      }

      <button
        className='topnavItemHide gbtn1'
        style={{ float: 'right', marginTop: '12px', ...BUTTONS.btn1 }}>
        Contact us
      </button>
      <button className='icon' onClick={handleDropDownBtn} style={{ fontSize: '15px',position:'absolute',left:'80%' }}>
        <i style={{ fontSize: '20px' }}>
          <img src={rowdash} height={25} width={25} />
        </i>
      </button>
    </div>

  </>

  )
}

export default Navbar
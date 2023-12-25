import React from 'react'
import {Link} from 'react-router-dom';

import { LuBookOpenCheck } from "react-icons/lu";
import { RiHome3Line } from "react-icons/ri";
import { SlCup } from "react-icons/sl";
import { TbBowl } from "react-icons/tb";
import { FaRocketchat } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

function SideBar() {
  return (
    <>
        <div><Link to="/" style={{fontSize:'18px',fontFamily:'var( --font-head)', display:'inline-block', marginBottom:'50px'}}>CERAMIX</Link></div>
        <div className="sideBar">
            <div className='sideBar-link'><LuBookOpenCheck /><Link to="/">ABOUT US</Link></div>
            <div className='sideBar-link'><RiHome3Line /><Link to="/homedecor">HOME DÉCOR</Link></div>
            <div className='sideBar-link'><SlCup /><Link to="/drinkset">DRINK SET</Link></div>
            <div className='sideBar-link'><TbBowl /><Link to="/tableware">TABLEWARE </Link></div>
            <div className='sideBar-link'><FaRocketchat /><Link to="/signup">CONTACT US</Link></div>
           
        </div>

        <div className='sideBar-link' style={{width:'100%', marginTop:'50px'}}><IoIosLogOut /><Link to="/">LOGOUT</Link></div>
        
    </>
  )
}

export default SideBar
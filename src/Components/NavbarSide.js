import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import icon1 from '../Icons/icon1.png'
import icon2 from '../Icons/icon2.png'
import icon3 from '../Icons/icon3.png'
import icon4 from '../Icons/icon4.png'
import icon5 from '../Icons/icon5.png'
import icon6 from '../Icons/icon6.png'
import icon7 from '../Icons/icon7.png'
import icon8 from '../Icons/icon8.png'
import icon9 from '../Icons/icon9.png'
import logoutIcon from '../Icons/logoutIcon.png'
import leftArrow from '../Icons/leftArrow.png'
import rightArrow from '../Icons/rightArrow.png'
import NavbarSideIcon from './NavbarSideIcon'
import NavbarSideIconOpen from './NavbarSideIconOpen'
export default function NavbarSide({active,setActive}) {
  const toggleSideBar = () => {
     setActive((prev) => !prev);
  }
  return (
    <div className={`bg-white flex flex-col ${active ? ' w-64' : 'w-20'} h-screen items-center justify-between`}>
       <div className=' flex items-center flex-column gap-2'>
          <div className={`bg-blue shadow-lg rounded-full absolute ${active ? 'left-60' : 'left-16'} top-12 p-2`} onClick={toggleSideBar}>
             <img src={active?leftArrow:rightArrow}/>
          </div>
          <div className=' w-full flex justify-center pt-2 pb-2 ' ><img src={icon1}/></div>
          <NavLink to="/products">{active?<NavbarSideIconOpen src={icon2} tittle="Product"/>:<NavbarSideIcon src={icon2}/>}</NavLink>
          {active?<NavbarSideIconOpen src={icon3} tittle="Inventory"/>:<NavbarSideIcon src={icon3}/>}
          <NavLink to="/materials">{active?<NavbarSideIconOpen src={icon4} tittle="Materials"/>:<NavbarSideIcon src={icon4}/>}</NavLink>
          <NavLink to="/sales">{active?<NavbarSideIconOpen src={icon5} tittle="Sales" />:<NavbarSideIcon src={icon5} leftBorder={{borderLeft:`(page==='/sales'`}}/>}</NavLink>
          {active?<NavbarSideIconOpen src={icon6} tittle="Documents"/>:<NavbarSideIcon src={icon6}/>}
          {active?<NavbarSideIconOpen src={icon7} tittle="Analytics"/>:<NavbarSideIcon src={icon7}/>}
          {active?<NavbarSideIconOpen src={icon8} tittle="Users"/>:<NavbarSideIcon src={icon8}/>}
          {active?<NavbarSideIconOpen src={icon9} tittle="Settings"/>:<NavbarSideIcon src={icon9}/>}
          
       </div>
       <div className='flex-end'>
          {active?<NavbarSideIconOpen src={logoutIcon} tittle="Log Out" isArrowDown={false}/>:<NavbarSideIcon src={logoutIcon}/>}
       </div>
    </div>
  )
}

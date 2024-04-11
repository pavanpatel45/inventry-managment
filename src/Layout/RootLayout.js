import React from 'react'
import {Outlet} from "react-router-dom";
import NavbarSide from '../Components/NavbarSide';
import NavbarTop from '../Components/NavbarTop';
import CreateOrder from '../Components/MakeOrder';
import SalesOrders from '../pages/orders/SalesOrders';
import ViewOrder from '../pages/orders/ViewOrder';
export default function RootLayout() {
  return (
    <div className=" flex max-h-screen scrollbar " style={{height:"100vh"}}>
    <div>
      <NavbarSide />
    </div>
    <div className="w-full">
      <div className="">
        <NavbarTop />
      </div>
      <div
        className=" mt-2 ml-2 overflow-auto scrollbar"
        style={{ height: "87vh" }}
      >
           <Outlet/>
      </div>
    </div>
  </div>
  )
}

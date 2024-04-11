import React ,{useState} from 'react'
import { NavLink,Outlet } from 'react-router-dom';
export default function NavbarSalesInner() {
  return (
    <div className="flex flex-row text-sm gap-4 px-3" style={{ color: "#565656" }} >
    <div className={`flex flex-row items-center gap-1`} style={{ borderColor: "#2DA060" }}>
      <div className="h-2 w-2 bg-blue-800 rounded-full"></div>
      <NavLink to="/sales/NewOrderRequest"> <div>New Order Request</div></NavLink>
    </div>
    <div className={`flex flex-row items-center gap-1 `} style={{ borderColor: "#2DA060" }} >
      <div className="h-2 w-2 bg-blue-800 rounded-full" ></div>
      <NavLink to="/sales/Pending"><div>Pending</div></NavLink>  
    </div>
    <div className={`flex flex-row items-center gap-1  `} style={{ borderColor: "#2DA060" }} >
       <div className="h-2 w-2 bg-blue-800 rounded-full" ></div>
       <NavLink to="/sales/InProgress">  <div>In Progress</div></NavLink>
    </div>
    <div className={`flex flex-row items-center gap-1 `} style={{ borderColor: "#2DA060" }} >
      <div className="h-2 w-2 bg-blue-800 rounded-full" ></div>
      <NavLink to="/sales/Shipped"> <div>Shipped</div></NavLink>
    </div>
    <div className={`flex flex-row items-center gap-1  `} style={{ borderColor: "#2DA060" }} >
      <div className="h-2 w-2 bg-blue-800 rounded-full" ></div>
      <NavLink to="/sales/Completed"> <div>Completed Order</div></NavLink>
    </div>
    <div   className={`flex flex-row items-center gap-1 `} style={{ borderColor: "#2DA060" }}>
      <div className="h-2 w-2 bg-blue-800 rounded-full"></div>
      <NavLink to="/sales/Cancelled"> <div>Cancelled Order</div></NavLink>
    </div>
  </div>
  )
}

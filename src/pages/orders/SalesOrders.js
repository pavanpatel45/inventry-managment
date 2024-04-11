import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Routes, Route, Link, useLocation } from "react-router-dom";
import OrderBox from "../../Components/OrderBox";
import NavbarForm from "../../Components/NavbarForm";
import NavbarSales from "../../Components/NavbarSales";
import FooterPagination from "../../Components/FooterPagination";
import InProgressOrder from "./InProgressOrder";
import NewOrderRequest from "../../Components/NewOrderRequest";
import PendingOrder from "../../Components/PendingOrder";
import ShippedOrder from "../../Components/ShippedOrder";
import CompletedOrder from "../../Components/CompletedOrder";
import CancelledOrder from "../../Components/CancelledOrder";
export default function SalesOrders() {
  const allOrders = useSelector((state) => state.orders);
  return (
    <div className="bg-white flex flex-col justify-between ">
       <div className="scrollbar" style={{height: "80vh" , overflow: 'auto' }}>
        <NavbarSales title="Sales" />
        {/* Navbar for order status Starts here*/}
        
        {/* Navbar for order status Ends here*/}
        <div className="grid grid-cols-1 p-3">
          <Routes>
            <Route path="/NewOrderRequest" element={<NewOrderRequest  />} />
            <Route path="/Pending" element={<PendingOrder />} />
            <Route path="/InProgress" element={<InProgressOrder  />} />
            <Route path="/Shipped" element={<ShippedOrder  />} />
            <Route path="/Completed" element={<CompletedOrder  />} />
            <Route path="/Cancelled" element={<CancelledOrder  />} />
          </Routes>
        </div>
      </div>
      <div className="px-3 ">
        <FooterPagination />
      </div>
    </div>
  );
}

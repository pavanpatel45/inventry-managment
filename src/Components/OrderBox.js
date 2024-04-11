import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {changeStatus } from  "../features/orders/ordersSlice";
import uparrow from "../Icons/up-arrow.png";
import downarrow from "../Icons/down-arrow.png";
import productImg from "../Icons/product.png";
import { Link } from "react-router-dom";
export default function OrderBox({ order, key }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenBox() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  const handleCancelledOrder = () =>{
    const status = 6;
    dispatch(changeStatus({id:order.id,status}))
  }
  return (
    <div
      className={`grid grid-rows-2 rounded-md pl-2 pr-2 gap-2 pt-3 ${
        isOpen ? "row-span-3" : "row-span-1"
      }`}
      style={{
        border: "1px solid #c1c1c1",
        height: "fit-content",
        backgroundColor: "#FAFFFC",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="rounded-md flex justify-center p-1"
            style={{ backgroundColor: "#E4E4E4" }}
          >
            <img src={productImg} />
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: "#4A4A4A" }}>
              Order Quantity: {order.productDetails.quantity}
            </div>
            <div className="text-xs font-normal" style={{ color: "#2D2D2D" }}>
              {order.productDetails.Name}
            </div>
          </div>
        </div>
        <div
          className="  p-2 h-8 w-8 rounded-full shadow-md flex items-center justify-center"
          onClick={handleOpenBox}
          style={{ backgroundColor: "#E4E4E4" }}
        >
          <img src={isOpen ? uparrow : downarrow} />
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <div className="text-xs font-normal" style={{ color: "#666666" }}>
          Received On {order.orderDetails.receivedDate}
        </div>
        <div className="flex flex-row items-center gap-2">
          <div
            className="h-2 w-2 rounded-full "
            style={{ backgroundColor: "#EF5E30" }}
          ></div>
          <div className="text-xs font-normal" style={{ color: "#EF5E30" }}>
            Available
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="grid gap-2">
          <div className="flex flex-row">
            <div className="text-xs font-medium" style={{ color: "#2D2D2D" }}>
              Order by :
            </div>
            <div className="text-xs font-normal" style={{ color: "#2D2D2D" }}>
              {order.customerDetails.customerName}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="text-xs font-medium" style={{ color: "#2D2D2D" }}>
              Location :
            </div>
            <div className="text-xs font-normal" style={{ color: "#2D2D2D" }}>
              {order.orderDetails.Location}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 flex-col">
              <div className="text-xs font-medium" style={{ color: "#696969" }}>
                Available
              </div>
              <div className="text-sm font-medium" style={{ color: "#2D2D2D" }}>
                300
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <div className="text-xs font-medium" style={{ color: "#696969" }}>
                Producible
              </div>
              <div className="text-sm font-medium" style={{ color: "#2D2D2D" }}>
                150
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <div className="text-xs font-medium" style={{ color: "#696969" }}>
                Unavailable
              </div>
              <div className="text-sm font-medium" style={{ color: "#2D2D2D" }}>
                50
              </div>
            </div>
          </div>
          <div className="leading-4">
            <div
              className="text-xs font-medium inline"
              style={{ color: "#2D2D2D" }}
            >
              {" "}
              Order Note:
            </div>
            <div
              className="text-xs font-normal inline"
              style={{ color: "#2D2D2D" }}
            >
              {order.orderDetails.Note}
            </div>
          </div>
          <div className="grid grid-cols-2 text-center">
         
            <button
              className="  my-2 mx-2 py-2  rounded-md orderBoxButton "
              style={{ border: "1px solid #2CAE66", color: "#2CAE66" }}
              onClick={handleCancelledOrder}
            >
               <Link to="/sales/Cancelled"> Cancel Order</Link>
             
            </button>
            
              <button
                className=" my-2 mx-2 py-2  rounded-md orderBoxButton"
                style={{ border: "1px solid #2CAE66", color: "#2CAE66" }}
              >
                <Link
               to="/viewOrder"
               state={order}
            > 
                View Order
                </Link>
              </button>
           
          </div>
        </div>
      )}
    </div>
  );
}

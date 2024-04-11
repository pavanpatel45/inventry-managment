import React,{useState} from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/store";
import CreateOrder from "./pages/orders/CreateOrder";
import SalesOrders from "./pages/orders/SalesOrders";
import OrderBoxMedium from "./Components/OrderBoxMedium";
import DialogBox from "./Components/DialogBox";
import "../src/CSS/dropdownCss.css";
import NavbarSide from "./Components/NavbarSide";
import NavbarTop from "./Components/NavbarTop";
import ViewOrder from "./pages/orders/ViewOrder";
import InProgressOrder from "./pages/orders/InProgressOrder";
import NewOrderRequest from "./Components/NewOrderRequest";
import PendingOrder from "./Components/PendingOrder";
import NavbarMaterials from "./Components/NavbarMaterials";
import Material from "./Components/Material";
import MakeOrder from './Components/MakeOrder'
import ShippedOrder from "./Components/ShippedOrder";
import CompletedOrder from "./Components/CompletedOrder";
import CancelledOrder from "./Components/CancelledOrder";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MaterialView from "./pages/Material/MaterialView";
import RootLayout from "./Layout/RootLayout";
import SalesLayout from "./Layout/SalesLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
       <Route index   />
       <Route path="sales" element={<SalesLayout/>}>
            <Route path="NewOrderRequest" element={<NewOrderRequest  />} />
            <Route path="Pending" element={<PendingOrder />} />
            <Route path="InProgress" element={<InProgressOrder  />} />
            <Route path="Shipped" element={<ShippedOrder  />} />
            <Route path="Completed" element={<CompletedOrder  />} />
            <Route path="Cancelled" element={<CancelledOrder  />} />
       </Route>
       <Route path="viewOrder" element={<ViewOrder/>}/>
       <Route path="materials" element={<MaterialView/>}/>
       
      </Route>
    )
)
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  );
}

export default App;

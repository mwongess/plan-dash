import path from "path";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Dashboard/>}/>
    )
  )
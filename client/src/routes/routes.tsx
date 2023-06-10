import { TableView } from "../components/TableView";
import { ListView } from "../components/ListView";
import BoardView from "../components/BoardView";
import Dashboard from "../layouts/Dashboard";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { LoginForm } from "../pages/Auth/LoginForm";
import { SignUp } from "../pages/Auth/SignUpForm";
import Landing from "../pages/Landing";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="auth/login" element={<LoginForm />} />
      <Route path="auth/signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="" element={<BoardView />} />
        <Route path="table" element={<TableView />} />
        <Route path="list" element={<ListView />} />
      </Route>
    </Route>
  )
);

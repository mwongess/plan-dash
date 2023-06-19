import { TableView } from "../components/TableView";
import { LoginForm } from "../pages/Auth/LoginForm";
import { SignUp } from "../pages/Auth/SignUpForm";
import { ListView } from "../components/ListView";
import BoardView from "../components/BoardView";
import Dashboard from "../layouts/Dashboard";
import Landing, { loader } from "../pages/Landing";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Projects from "../pages/Projects";
import NewProject from "../components/NewProject/NewProject";
import { getProjects } from "../actions/project.actions";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} loader={loader} />
      <Route path="auth/login" element={<LoginForm />} />
      <Route path="auth/signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />} loader={getProjects}>
        <Route path="" element={<Projects />}>
            <Route path="" element={<BoardView />} />
            <Route path="table" element={<TableView />} />
            <Route path="list" element={<ListView />} />
        </Route>
        <Route path="project/new" element={<NewProject/>}/>
      </Route>
    </Route>
  )
);

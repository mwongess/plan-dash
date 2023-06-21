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
import NewProject from "../components/NewProject/NewProject";
import Projects from "../pages/Projects";
import { getProjects } from "../actions/project.actions";
import TaskSomeone from "../components/TaskSomeone";
import Error from "../components/Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} loader={loader} />
      <Route path="auth/login" element={<LoginForm />} />
      <Route path="auth/signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="" element={<Projects />}>
          <Route path="" element={<BoardView />} />
          <Route path="table" element={<TableView />} />
          <Route path="list" element={<ListView />} />
        </Route>
        <Route path="project/new" element={<NewProject />} />
        <Route
          path="project/:project_id/assign/to/:user:id"
          element={<TaskSomeone />}
        />
      </Route>
    </Route>
  )
);

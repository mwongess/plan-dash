import { TableView } from "../components/TableView";
import { ListView } from "../components/ListView";
import BoardView from "../components/BoardView";
import Dashboard from "../layouts/Dashboard";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route path="/" element={<BoardView />} />
      <Route path="/table" element={<TableView />} />
      <Route path="/list" element={<ListView />} />
    </Route>
  )
);

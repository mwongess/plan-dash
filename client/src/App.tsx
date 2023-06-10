import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PlanDashProvider } from "./contexts/PlanDashContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <PlanDashProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PlanDashProvider>
    </>
  );
}

export default App;

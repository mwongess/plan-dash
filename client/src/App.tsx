import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PlanDashProvider } from "./contexts/PlanDashContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PlanDashProvider>
          <RouterProvider router={router} />
          {/* <ReactQueryDevtools/> */}
        </PlanDashProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

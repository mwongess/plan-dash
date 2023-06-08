import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PlanDashProvider } from "./contexts/PlanDashContext";
import Project from "./components/Project";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <PlanDashProvider>
        <QueryClientProvider client={queryClient}>
          <Project />
        </QueryClientProvider>
      </PlanDashProvider>
    </>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Project from "./components/Project";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Project />
      </QueryClientProvider>
    </>
  );
}

export default App;

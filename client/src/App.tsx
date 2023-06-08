import { ProjectsProvider } from "./contexts/projectsContext";
import "./App.css";
import Project from "./components/Project";

function App() {
  return (
    <>
      <ProjectsProvider>
        <Project/>
      </ProjectsProvider>
    </>
  );
}

export default App;

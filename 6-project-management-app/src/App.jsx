import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // start creating a new project, set selectedProjectId to null to show NewProject component
  function handleCreatingProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCreateProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  // check if project exists to show correct component
  if (projectState.selectedProjectId === null) {
    content = <NewProject onCreateProject={handleCreateProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreatingProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onCreateProject={handleCreatingProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;

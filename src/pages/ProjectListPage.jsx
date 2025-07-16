import axios from "axios";
import { useState, useEffect } from "react";

import Loader from "../components/Loader";

import { BASE_URL } from "../config/api";

function ProjectListPage() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + "/projects")
      .then((response) => {
        const projectsArr = response.data.toReversed();
        setProjects(projectsArr);
      })
      .catch((error) => console.log("ERROR: cannot GET projects", error));
  }, []);

  if (projects === null) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Number of Projects: {projects.length}</h2>
      {projects.map((project) => {
        return (
          <div key={project.id} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectListPage;

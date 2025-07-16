import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const BASE_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectListPage() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + "/projects")
      .then((response) => {
        setProjects(response.data);
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

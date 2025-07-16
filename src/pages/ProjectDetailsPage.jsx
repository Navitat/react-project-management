import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import { BASE_URL } from "../config/api";
import AddTask from "../components/AddTask";

function ProjectDetailsPage() {
  const [project, setProject] = useState(null);

  const { projectId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProject();
  }, [projectId]);

  const getProject = () => {
    axios
      .get(`${BASE_URL}/projects/${projectId}?_embed=tasks`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) =>
        console.log("Error getting project details from the API...", error)
      );
  };

  const deleteProject = () => {
    axios
      .delete(`${BASE_URL}/projects/${projectId}`)
      .then((response) => {
        navigate("/projects");
      })
      .catch((e) => {
        console.log("ERROR on Delete: ", e);
      });
  };

  if (project === null) {
    return <Loader />;
  }

  return (
    <div className="ProjectDetailsPage">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <AddTask projectId={projectId} onRefresh={getProject} />

      {/* Lists of tasks */}
      {project.tasks.map((task) => {
        return (
          <div className="TaskCard card" key={task.id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </div>
        );
      })}
      <div>
        <Link to={`/projects/edit/${project.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={deleteProject}>Delete</button>
        <div>
          <Link to="/projects">
            <button>Back to projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;

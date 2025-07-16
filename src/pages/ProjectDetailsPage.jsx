import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import { BASE_URL } from "../config/api";

function ProjectDetailsPage() {
  const [project, setProject] = useState(null);

  const { projectId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects/${projectId}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) =>
        console.log("Error getting project details from the API...", error)
      );
  }, [projectId]);

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
  );
}

export default ProjectDetailsPage;

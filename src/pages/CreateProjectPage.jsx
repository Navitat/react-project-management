import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../config/api";

function CreateProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      title: title,
      description: description,
    };

    axios
      .post(BASE_URL + "/projects", newProject)
      .then(() => {
        navigate("/projects");
      })
      .catch((e) => console.log("ERROR on POST: ", e));
  };

  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="enter the title"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="enter the description"
          />
        </label>

        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;

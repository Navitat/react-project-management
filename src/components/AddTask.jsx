import { useState } from "react";
import axios from "axios";

import { BASE_URL } from "../config/api";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = parseInt(props.projectId); // api expects the project id as a number

    const newTask = {
      projectId: id,
      title: title,
      description: description,
    };

    axios
      .post(`${BASE_URL}/tasks`, newTask)
      .then((response) => {
        console.log("Success on /task POST");
        // invoke callback to refresh project
        props.onRefresh();
        // clear form
        setTitle("");
        setDescription("");
      })
      .catch((e) => console.log("ERROR on /task POST: ", e));
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;

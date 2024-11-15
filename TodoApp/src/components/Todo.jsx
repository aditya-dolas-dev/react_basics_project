import React from "react";
import { useState } from "react";
import "../style.css";

const Todo = () => {
  const [task, setTask] = useState([]);

  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTask((task) => {
      return task.concat({
        text: input,
        id: Math.floor(Math.random() * 100),
      });
    });

    setInput("");
  };

  const removeTask = (id) => setTask((task) => task.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the task"
        className="entryBox"
      ></input>

      <button className="btn" onClick={handleSubmit}>
        Add
      </button>

      <div className="listing-div">
        <ul>
          {task.map(({ text, id }) => (
            <li key={id} className="list">
              <span>{text}</span>
              <button
                className="btn-remove"
                onClick={() => {
                  removeTask(id);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

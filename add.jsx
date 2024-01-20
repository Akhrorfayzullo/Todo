import React, { useState } from "react";

const AddComponent = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          onClick={() => {
            setTitle("");
            onAddTodo(title);
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default AddComponent;

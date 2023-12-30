import { useState } from "react";

export default function NewTask({ onCreate }) {
  const [taskContent, setTaskContent] = useState();

  function handleChange(event) {
    setTaskContent(event.target.value);
  }

  function handleClick() {
    onCreate(taskContent);
    setTaskContent("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={taskContent}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Create Task
      </button>
    </div>
  );
}

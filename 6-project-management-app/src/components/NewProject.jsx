import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onCreateProject }) {
  const modalRef = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const inputTitle = title.current.value;
    const inputDescription = description.current.value;
    const inputDueDate = dueDate.current.value;

    if (
      inputTitle.trim() === "" ||
      inputDescription.trim() === "" ||
      inputDueDate.trim() === ""
    ) {
      modalRef.current.open();
      // if any of the inputs are empty, return to stop the function
      return;
    }

    onCreateProject({
      title: inputTitle,
      description: inputDescription,
      dueDate: inputDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Please fill out all fields.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected() {
  return (
    <div className="met-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="No project"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or create a new project.
      </p>
      <p className="mt-8">
        <Button>Create New Project</Button>
      </p>
    </div>
  );
}

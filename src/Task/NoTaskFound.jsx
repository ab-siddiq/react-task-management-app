import emptyTask from "../assets/empty-task.svg";
export default function NoTaskFound() {
  return (
    <div className="flex justify-center">
      <img src={emptyTask} />
    </div>
  );
}

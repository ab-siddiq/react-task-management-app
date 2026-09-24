import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn react such than i can treat it like my slave and make it do whatever i want to do",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAdModal, setShowAdModal] = useState(false);
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    setShowAdModal(false);
    console.log(tasks);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAdModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <TaskActions
              onAddClick={() => {
                setShowAdModal(true);
              }}
            />
          </div>
          <div className="overflow-auto">
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    </section>
  );
}

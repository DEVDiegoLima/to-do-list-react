import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskList } from "./components/TaskList";

function App() {
  const [taskEntered, setTaskEntered] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [showTasks, setShowTasks] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskEntered(e.target.value);
  }

  const handleAddTask = () => {
    if (taskEntered === "") return;
    setTasks((prevTasks) => [...prevTasks, taskEntered]);
    setShowTasks(true);
    setTaskEntered("");
  };

  return (
    <>
      <Header />
      <Task
        value={taskEntered}
        onChange={handleChange}
        onTask={handleAddTask}
      />
      {showTasks ? <TaskList list={tasks} onAddTask={handleAddTask} /> : ""}
    </>
  );
}

export default App;

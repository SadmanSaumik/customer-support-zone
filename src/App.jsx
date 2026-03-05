import { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Banner from "./components/Banner/Banner";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import ResolvedTask from "./components/ResolvedTask/ResolvedTask";
import Footer from "./components/Footer/Footer";

const ticketsPromise = fetch("/ticketData.json").then((res) => res.json());
function App() {
  const [tasks, setTasks] = useState([]);
  const [resolveTasks, setResolveTask] = useState([]);
  const handleTasks = (task) => {
    if (tasks.find((t) => t.id === task.id)) return;
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  const handleResolveTask = (resolvedTask) => {
    const remainingTasks = tasks.filter((t) => t.id !== resolvedTask.id);
    setTasks(remainingTasks);

    const newResolvedTask = [...resolveTasks, resolvedTask];
    setResolveTask(newResolvedTask);
  };
  return (
    <>
      <NavBar></NavBar>
      <Banner tasks={tasks} resolveTasks={resolveTasks}></Banner>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          <Suspense fallback={<div>Loading...</div>}>
            <CustomerTickets
              handleTasks={handleTasks}
              ticketsPromise={ticketsPromise}
            ></CustomerTickets>
          </Suspense>
          <div>
            <div>
              <h3 className="text-2xl font-bold">Task Status</h3>
              {tasks.length === 0 ? (
                <p className="text-gray-400 mt-2">
                  Select a ticket to add to Task Status
                </p>
              ) : (
                tasks.map((task) => (
                  <TaskStatus
                    handleResolveTask={handleResolveTask}
                    key={task.id}
                    task={task}
                  ></TaskStatus>
                ))
              )}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold">Resolved Task</h3>
              {resolveTasks.length === 0 ? (
                <p className="text-gray-400 mt-2">No resolved task found</p>
              ) : (
                resolveTasks.map((task) => (
                  <ResolvedTask key={task.id} task={task}></ResolvedTask>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

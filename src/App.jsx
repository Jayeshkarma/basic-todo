import { useState } from "react";

import "./App.css";

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    const newtask = {
      id: new Date().getTime(),
      title: taskTitle,
      description,
      dueDate,
      assignedTo,
      status: "pending",
    };

    setTaskList((pre) => [newtask, ...pre]);
    ClearForm();
  };

  const ClearForm = () => {
    setAssignedTo("");
    setDescription("");
    setDueDate("");
    setTaskTitle("");
  };

  const pendingTasks = taskList.filter((task) => task.status === "pending");
  const inprogressTasks = taskList.filter(
    (task) => task.status === "inProgress"
  );
  const completedTasks = taskList.filter((task) => task.status === "Completed");

  const handleStatusUpdate = (id, newStatus) => {
    const index = taskList.findIndex((task) => task.id === id);

    const updatetasklist = [...taskList];
    updatetasklist[index].status = newStatus;

    setTaskList(updatetasklist);
  };

  return (
    <div className="App">
      <div>
        <h2>create task</h2>
        <div>
          <input
            placeholder="Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <input
            placeholder="Assigned to"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />
          <button
            onClick={() => {
              handleAddTask();
            }}
          >
            Add Task
          </button>
        </div>
      </div>
      <div>
        <h2>Tasks List</h2>
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <div>
              <h2>Pending</h2>

              {pendingTasks?.map((task, index) => (
                <div
                  key={index}
                  style={{
                    width: 200,

                    borderRadius: "10px",
                    backgroundColor: "blue",
                  }}
                >
                  <div>title: {task.title}</div>
                  <div>description: {task.description}</div>
                  <div>due Date{task.dueDate}</div>
                  <div>Assigned To {task.assignedTo}</div>
                  <button
                    onClick={() => {
                      handleStatusUpdate(task.id, "inProgress");
                    }}
                  >
                    start
                  </button>
                </div>
              ))}
            </div>
            <div>
              <h2>In Progress</h2>
              {inprogressTasks?.map((task, index) => (
                <div
                  key={index}
                  style={{
                    width: 200,

                    borderRadius: "10px",
                    backgroundColor: "blue",
                  }}
                >
                  <div>title: {task.title}</div>
                  <div>description: {task.description}</div>
                  <div>due Date{task.dueDate}</div>
                  <div>Assigned To {task.assignedTo}</div>
                  <button
                    onClick={() => {
                      handleStatusUpdate(task.id, "Completed");
                    }}
                  >
                    mark as Complete
                  </button>
                </div>
              ))}
            </div>
            <div>
              <h2>Completed</h2>
              {completedTasks?.map((task, index) => (
                <div
                  key={index}
                  style={{
                    width: 200,

                    borderRadius: "10px",
                    backgroundColor: "blue",
                  }}
                >
                  <div>title: {task.title}</div>
                  <div>description: {task.description}</div>
                  <div>due Date{task.dueDate}</div>
                  <div>Assigned To {task.assignedTo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Tasklist } from "../Tasklist";
export const Tasks = (props) => {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    const newToDoList = [...toDoList, task];
    setToDoList(newToDoList);
  };

  const completeTask = (id) => {
    const finishedTask = toDoList.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : task;
    });
    setToDoList(finishedTask);
  };

  const deleteTask = (id) => {
    const newToDoList = toDoList.filter((task) => {
      return task.id !== id;
    });
    setToDoList(newToDoList);
  };

  return (
    <div>
      <div>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {toDoList.map((task) => {
          return (
            <Tasklist
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Tasklist = (props) => {
  return (
    <div>
      <h2 style={{ color: props.completed ? "green" : "black" }}>
        {props.taskName}
      </h2>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

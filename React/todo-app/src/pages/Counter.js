import { useCount } from "../useCount";

export const Counter = () => {
  const { count, increaseCount, decreaseCount, setToZero } = useCount();
  return (
    <div className="App">
      {count}
      <button onClick={increaseCount} className="button">
        Increase
      </button>
      <button onClick={decreaseCount} className="button">
        Decrease
      </button>
      <button onClick={setToZero} className="button">
        Restart
      </button>
    </div>
  );
};

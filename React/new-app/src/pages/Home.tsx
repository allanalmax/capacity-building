import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Username: {username}</h2>
    </div>
  );
};

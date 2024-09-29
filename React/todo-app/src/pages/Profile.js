import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { userName, setUserName } = useContext(AppContext);

  return (
    <div>
      <h2>Profile page</h2>
      User is: {userName}
      <ChangeProfile setUserName={setUserName} />
    </div>
  );
};

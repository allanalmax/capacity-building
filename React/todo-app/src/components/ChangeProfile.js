import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const [newUserName, setNewUserName] = useState("");
  const { setUserName } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
        // value={newUserName}
      />
      <button onClick={() => setUserName(newUserName)}>Change username</button>
    </div>
  );
};

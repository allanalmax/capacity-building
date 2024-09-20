import { useState } from "react";

export const ChangeProfile = (props) => {
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
        // value={newUserName}
      />
      <button onClick={() => props.setUserName(newUserName)}>
        Change username
      </button>
    </div>
  );
};

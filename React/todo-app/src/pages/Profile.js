import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
  return (
    <div>
      <h2>Profile page</h2>
      User is: {props.userName}
      <ChangeProfile setUserName={props.setUserName} />
    </div>
  );
};

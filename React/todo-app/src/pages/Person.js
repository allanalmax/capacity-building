import PropTypes from "prop-types";

export const Person = (props) => {
  return (
    <div className={"App"}>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>This person {props.isMarried ? "is" : "is not"} MARRIED</h2>
      {props.friends.map((friend) => (
        <h3>{friend}</h3>
      ))}
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};

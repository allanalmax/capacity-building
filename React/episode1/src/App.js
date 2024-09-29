import styles from "./App.module.css";
import { useState } from "react";
import { User } from "./User";
import { Planets } from "./Planets";

function App() {
  // const age = 19;
  const isGreen = true;

  // if (age >= 18) {
  //     return (
  //         // calling a component
  //         <div className={styles.App}>
  //             {/*<User name={"Allan"} age={20} email={"allan@domain.com"}/>*/}
  //
  //             {/*<Job salary={30000} position={"Senior"} company={"Amazon"}/>*/}
  //
  //             <h1>Over age</h1>
  //         </div>
  //     );
  // } else {
  //     return (
  //         <div>Under age</div>
  //     )
  // }

  // return (
  //   <div className={styles.App}>
  //     {age >= 18 ? <h1>Overage</h1> : <h1>Under age</h1>}
  //     <h2 style={{ color: isGreen ? "green" : "red", backgroundColor: "aqua" }}>
  //       This has color
  //     </h2>
  //
  //     {isGreen && <button>click</button>}
  //   </div>
  // );

  // const names = ["Allan", "Bob", "John"];

  const users = [
    { name: "Job", age: 29 },
    { name: "Bob", age: 32 },
  ];

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className={styles.App}>
      {planets.map((planet, index) => (
        <Planets
          key={index}
          name={planet.name}
          isGasPlanet={planet.isGasPlanet}
        />
      ))}

      {/*{users.map((user) => {*/}
      {/*  return <User name={user.name} age={user.age} />;*/}
      {/*})}*/}

      {/*<Planets*/}
      {/*    {planets.map((planet) => {*/}
      {/*      // <Planets planet.isGasPlanet && {planet.name}/>*/}
      {/*      // return planet.isGasPlanet && <h1>{planet.name}</h1>;*/}
      {/*      {planet.isGasPlanet ? name={planet.name}}*/}
      {/*    })}*/}
      {/*/>*/}

      {/*{planets.map((planet,index) => {*/}
      {/*  <Planets*/}
      {/*    key={index}*/}
      {/*    name={planets.name}*/}
      {/*    isGasPlanet={planets.isGasPlanet}*/}
      {/*  />;*/}
      {/*})}*/}
    </div>
  );

  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  // const [inputValue, setInputValue] = useState("");
  // const [textColor, setTextColor] = useState("black");

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // return (
  //   <div className={styles.App}>
  //     {/*{age}*/}
  //     {/*<button onClick={increaseAge}>Increase age</button>*/}
  //
  //     {/*<input type="text" onChange={handleInputChange} />*/}
  //     {/*{inputValue}*/}
  //
  //     {/*<button*/}
  //     {/*  onClick={() => {*/}
  //     {/*    // setShowText(!showText);*/}
  //     {/*    setTextColor(textColor === "black" ? "red" : "black");*/}
  //     {/*  }}*/}
  //     {/*>*/}
  //     {/*  Show/Hide*/}
  //     {/*</button>*/}
  //     {/*/!*{showText && <h1>Allan</h1>}*!/*/}
  //     {/*<h1 style={{ color: textColor }}>Allan</h1>*/}
  //
  //   </div>
  // );
}

// normal JS function
// const getName = () => {
//     return "Allan";
// };

//props
// const props = {
//     name: "Allan",
//     age: 20,
//     email: "allan@domain.com",
// }

// component
// const User = (props) => {
//   // props are arguments passed in components to rep data
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h3>{props.email}</h3>
//     </div>
//   );
// };

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
    </div>
  );
};

export default App;

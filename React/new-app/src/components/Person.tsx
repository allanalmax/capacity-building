import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Uganda = "Uganda",
  Kenya = "Kenya",
  Tanzania = "Tanzania",
}

export const Person = (props: Props) => {
  const [name, setName] = useState<string>("");
  return (
    <div className={"App"}>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>This person {props.isMarried ? "is" : "is not"} MARRIED</h2>
      {props.friends.map((friend: string) => (
        <h3>{friend}</h3>
      ))}
      <h2>Country: {props.country}</h2>
    </div>
  );
};

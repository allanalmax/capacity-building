﻿import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const SampleForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required("Email is required"),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type={"text"}
        placeholder={"Full Name"}
        {...register("fullName")}
      />
      <p>{errors.fullName?.message}</p>
      <input type={"text"} placeholder={"Email"} {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type={"number"} placeholder={"age"} {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type={"password"}
        placeholder={"Password"}
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type={"password"}
        placeholder={"Confirm password"}
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type={"submit"} />
    </form>
  );
};

import { useFormik } from "formik";
import style from "./auth.module.css";
import React, { useState } from "react";

interface IFormValues {
  username: string;
  password: string;
}
async function loginData(values: IFormValues) {
  //   const res = await fetch("https://dummyjson.com/user/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username: values.username,
  //       password: values.password,
  //     }),
  //   });
  //   const data = await res.json();
  //   console.log("data", data);
}
interface IUserData {
  id: number;
  gender: string;
  email: string;
  firstName: string;
  lastName: string;
  refreshToken: string;
  token: string;
  image: string;
}
const initial = {
  id: 0,
  gender: "",
  email: "",
  firstName: "",
  lastName: "",
  refreshToken: "",
  token: "",
  image: "",
};

export default function Auth() {
  const [userData, setUserData] = useState<IUserData>(initial);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    } as IFormValues,
    onSubmit: async (values: IFormValues, { resetForm }) => {
      //   loginData(values);
      const res = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });
      const data = await res.json();
      setUserData(data);
      resetForm();
    },
  });
  return (
    <div className={style["auth-container"]}>
      <span>Formic auth</span>
      <p>emilys</p>
      <p>emilyspass</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="username"
          onChange={formik.handleChange}
          placeholder="username"
          type="text"
          value={formik.values.username}
        />
        <input
          name="password"
          onChange={formik.handleChange}
          placeholder="password"
          type="text"
          value={formik.values.password}
        />
        <button type="submit">Login</button>
      </form>
      {userData.firstName && (
        <>
          <p>Name: {userData.firstName}</p>
          <p>Last name: {userData.lastName}</p>
          <p>Email: {userData.email}</p>
          <img width={200} src={userData.image} alt="user" />
        </>)}
    </div>
  );
}

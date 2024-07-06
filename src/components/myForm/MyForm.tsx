import React, { FC } from "react";
import { useFormik } from "formik";
import style from "./myForm.module.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const MyForm: FC = () => {
  const navigate =useNavigate();
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .required("First Name is Required🤷‍♂️"),
    lastName: Yup.string().required(" Last Name🤦‍♀️🤦‍♀️🤦‍♀️ is Required "),
    email: Yup.string().email("incorrect👌 email format").required("надо федя, надо!"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormValues) => {
      console.log(values);
      navigate("/")
      alert("Form Submitted");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={style.container}>
      <input
        id="firstName"
        onChange={formik.handleChange}
        type="text"
        placeholder="First Name"
        value={formik.values.firstName}
        className={style.input}
      />
      <input
        id="lastName"
        onChange={formik.handleChange}
        type="text"
        placeholder="Last Name"
        value={formik.values.lastName}
        className={style.input}
      />
      <input
        id="email"
        onChange={formik.handleChange}
        type="text"
        placeholder="Email Address"
        value={formik.values.email}
        className={style.input}
      />

      <button type="submit">submit</button>
      <span>{formik.errors.firstName}</span>
      <span>{formik.errors.lastName}</span>
      <span>{formik.errors.email}</span>
    </form>
  );
};

export default MyForm;

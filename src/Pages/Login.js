import React from "react";
import { Formik } from "formik";
import style from "../Styling/Pages/FormLogin.module.css";
export default function Login() {
  return (
    <div>
      <div className={style.containerLogin}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Yang bener apa";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              console.log(values);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={style.formSubmit}>
              <h1>Sign in</h1>
              <button type="button" className={style.btn_sosialMedia}>
                Sign in with Google
              </button>
              <button type="button" className={style.btn_sosialMedia}>
                Sign in with Facebook
              </button>
              <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="masukin email woi" />
              {errors.email && touched.email && errors.email}
              <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="masukin Password woi" />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
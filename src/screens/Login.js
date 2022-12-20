import React from "react";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import axios from "axios";
// import InvalidToken from "../Error/InvalidToken";
import Spinner from "../assets/Spinner/Spinner";
import { ERROR, INPUT } from "../assets/constants/theme";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../Redux/actions/useAlert";
import Footer from "../components/Footer/Footer";


const Login = () => {
  const navigate = useNavigate()
  const { displayAlert } = useAlert();

  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(false)

  useEffect(() => {
    const loginApi = async () => {
      try {
        //   let payload = { token: window.location.href.split('=')[1] }
        //   let resapi = await axios.post(`${registerUrl}/invite/verifytoken`, payload)
        //   console.log(resapi)
      } catch (err) {
        console.log(err);
        seterror(true);
      }
      setloading(false)
    }
    loginApi()
  }, [])

  const handleAlert = () => {
    displayAlert({
      message: "Login Failed",
      color: "red",
      timeout: 5000
    })
  }

  if (error) {
    return "ERROR"
  }

  return (
    <>
      {loading
        ?
        <div style={{ marginTop: "2.5rem" }}>
          <Spinner />
        </div>
        :
        <>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                let payload = values;
                console.log("Logging in", payload);
                setSubmitting(false);
                if (true) handleAlert()
              }, 500);
            }}

            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Required"),
              password: Yup.string()
                .required("No password provided.")
                .min(1, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number."),
            })}
          >

            {props => {
              const {
                values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit
              } = props;

              if (isSubmitting) {
                var disableStyle = { cursor: "not-allowed", }
              }

              return (<>

                <div className="center-screen">

                  <div className="gcard" style={{ margin: '5px', height: 'auto', width: "35rem", padding: '40px' }}>
                    <h1 style={{ marginBottom: '15px' }}>Please SignIn</h1>
                    <form
                      onSubmit={handleSubmit}
                      style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>

                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={INPUT.box1}
                        className={errors.email && touched.email && "error"}
                      />
                      <div style={errors.email && touched.email ? ERROR.inputFTrue : ERROR.inputFFalse}>
                        {errors.email && touched.email && errors.email}&nbsp;</div>


                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={INPUT.box1}
                        className={errors.password && touched.password && "error"}
                      />
                      <div style={errors.password && touched.password ? ERROR.inputFTrue : ERROR.inputFFalse}>
                        {errors.password && touched.password && errors.password}&nbsp;</div>

                      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <button type="submit" className="gbtn1" style={disableStyle} disabled={isSubmitting}>Log in</button>
                        <button type="button" className="gbtn1" onClick={() => navigate('/register')}>Register</button>

                      </div>
                      <a href="/" className="gforgotpass">Forgot Password?</a>
                    </form>
                  </div>
                </div>
              </>

              );
            }}
          </Formik>
          <Footer/>
        </>
      }
    </>
  )
}

export default Login;
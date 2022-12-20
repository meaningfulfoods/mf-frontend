import React from "react";
import { useState, useEffect } from "react";
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "../Redux/actions/useAlert";
import { COLORS, ERROR, INPUT, BUTTONS } from "../assets/constants/theme";
import { fb, insta, twitter } from "../assets/icons/index";
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate()
  const { displayAlert } = useAlert();

  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(false)
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

  return (<>
    <Navbar />
    <div className="gcontainer" style={{ padding: '40px 40px' }}>
      <h2 style={{ padding: '0px 0px 25px 0px' }}>Contact us</h2>
      <div style={{ display: 'flex' }}>

        <div className='gcard' style={{ backgroundColor: '#EAEAEA', height: 'auto', width: "300px", padding: '20px', border: 'hidden', borderRadius: '8px 0px 0px 8px' }}>

          <Formik
            initialValues={{ Name: "", lastName: "", email: "", message: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                let payload = values;
                console.log("Logging in", payload);
                setSubmitting(false);
                if (true) handleAlert()
              }, 500);
            }}

            validationSchema={Yup.object().shape({
              Name: Yup.string()
                .required("Required"),
              email: Yup.string()
                .email()
                .required("Required"),
              mobile: Yup.number(),
              message: Yup.string()
                .required("Required"),
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

                <div style={{ minWidth: '16rem' }} >
                  <form
                    onSubmit={handleSubmit}
                    style={{ display: 'grid', gridRowGap: '0px' }}>

                    <label htmlFor="" style={INPUT.label1}> Name</label>
                    <input
                      id="Name"
                      name="Name"
                      type="text"
                      placeholder="Enter your Name"
                      value={values.Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ marginBottom: '0px', ...INPUT.box1 }}
                      className={errors.Name && touched.Name && "error"}
                    />
                    <div style={errors.Name && touched.Name ? ERROR.inputFTrue : ERROR.inputFFalse}>
                      {errors.Name && touched.Name && errors.Name}&nbsp;</div>

                    <label htmlFor="email" style={INPUT.label1}>Email</label>
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

                    <label htmlFor="mobile" style={INPUT.label1}>Mobile</label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      placeholder="Optional"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={INPUT.box1}
                      className={errors.mobile && touched.mobile && "error"}
                    />
                    <div style={errors.mobile && touched.mobile ? ERROR.inputFTrue : ERROR.inputFFalse}>
                      {errors.mobile && touched.mobile && errors.mobile}&nbsp;</div>


                    <label htmlFor="message" style={INPUT.label1}>Message</label>
                    <textarea
                      rows="5"
                      id="message"
                      name="message"
                      type="password"
                      placeholder="Max 250 words"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ backgroundColor: COLORS.gray }}
                      className={errors.message && touched.message && "error"}>
                    </textarea>

                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
                      <button type="submit" style={{ disableStyle, ...BUTTONS.btn1 }} disabled={isSubmitting}>
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
              </>

              );
            }}
          </Formik>



        </div>

        <div className='gcard contactdetailcard' style={{ backgroundColor: '#EAEAEA', height: 'auto', width: "300px", padding: '20px 20px 20px 0px', border: 'hidden', borderRadius: '0px 8px 8px 0px' }}>

          <table style={{ border: '0' }}>
            <tbody><tr><th className="divider"></th></tr></tbody>
          </table>

          <div style={{ paddingLeft: '20px' }}>
            <label style={INPUT.label1}>Email</label>
            <p className="labelDetail">hello@meaningfulfoods.in</p>
            <label style={INPUT.label1}>Phone</label>
            <p className="labelDetail">123</p>
            <label style={INPUT.label}>Social</label>
            <div style={{ display: 'flex' }}>
              <p className="labelDetail"><Link><img src={fb} className='contactIcons' alt='' /></Link></p>
              <p className="labelDetail"><Link><img src={insta} className='contactIcons' alt='' /></Link></p>
              <p className="labelDetail"><Link><img src={twitter} className='contactIcons' alt='' /></Link></p>

            </div>

          </div>

        </div>

      </div>


    </div>

    <Footer />
  </>
  )
}

export default Contact
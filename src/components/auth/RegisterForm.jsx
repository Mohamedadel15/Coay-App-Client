import React, { useState } from 'react'
import InputDemo from '../helper/inputDemo'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as yup from "yup";
import { postData } from '../../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import { notifyData } from '../../utils/helpers';

export default function RegisterForm() {
  const [t] = useTranslation()
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate()


  const formik = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
      },
      validationSchema: yup.object().shape({
        email: yup.string().email(t("Auth.Login.ErrorEmail")).required(t("Auth.Login.ErrorEmailRequired")),
        password: yup.string().required(t("Auth.Login.ErrorPassword")),
        first_name: yup.string().required(t("Auth.Register.ErrorName")),
        last_name: yup.string().required(t("Auth.Register.ErrorName")),
      }),
      onSubmit: (values) => {
        setLoading(true);
        postData("/taskit/register/", values).then((data) => {
          setLoading(false);
          notifyData(data?.data?.message || "Login Success", "success")
          navigate("/login")
        }).catch((error) => {
          setLoading(false);
          notifyData(error?.response?.data?.message || "Error Eccure When Login", "error");
        });
      }
    }
  )
  return (
    <form className='flex flex-col p-5 px-2 md:px-10 gap-3 mt-8 items-center' onSubmit={formik.handleSubmit}>
      <div className='w-1/2'>
        <InputDemo label={t("Auth.Register.Name")} placeHolder={t("Auth.Register.Name")} id="first_name" type="text" error={formik.errors.first_name} value={formik.values.first_name} onChange={formik.handleChange} />
      </div>

      <div className='w-1/2'>
        <InputDemo label={t("Auth.Register.LastName")} placeHolder={t("Auth.Register.LastName")} id="last_name" type="text" error={formik.errors.last_name} value={formik.values.last_name} onChange={formik.handleChange} />
      </div>
      <div className='w-1/2'>
        <InputDemo label={t("Auth.Login.Email")} placeHolder={t("Auth.Login.Email")} id="email" type="email" error={formik.errors.email} value={formik.values.email} onChange={formik.handleChange} />
      </div>

      <div className='w-1/2'>
        <InputDemo label={t("Auth.Login.Password")} placeHolder={t("Auth.Login.Password")} id="password" type="password" error={formik.errors.password} value={formik.values.password} onChange={formik.handleChange} />
      </div>


      <div>Go To Login Page  <Link to='/login' className='text-blue-500 underline'>Login</Link> </div>
      <button type="submit" disabled={Loading} className="bg-primary_Color text-white p-2 rounded-md w-1/2">{Loading ? "Loading..........." : t("Auth.Register.Header")}</button>
    </form>
  )
}

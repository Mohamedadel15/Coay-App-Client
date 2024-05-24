import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import * as yup from "yup";

import { postData } from '../../utils/api';
import { notifyData } from '../../utils/helpers';

import InputDemo from '../helper/inputDemo'

export default function LoginFrom() {
    const [t] = useTranslation()
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const formik = useFormik(
        {
            initialValues: {
                email: "",
                password: ""
            },
            validationSchema: yup.object().shape({
                email: yup.string().email(t("Auth.Login.ErrorEmail")).required(t("Auth.Login.ErrorEmailRequired")),
                password: yup.string().required(t("Auth.Login.ErrorPassword"))
            }),
            onSubmit: (values) => {
                setLoading(true);
                postData("/taskit/login/", values).then((data) => {
                    setLoading(false);
                    notifyData(data?.data?.message || "Login Success", "success")
                    localStorage.setItem("token", data?.data?.token);
                    navigate("/stay/cart")
                }).catch((error) => {
                    notifyData(error?.response?.data?.message || "Error Eccure When Login", "error");
                    error?.response?.data?.message === "Incorrect password." ? formik.setFieldError("password", error?.response?.data?.message || "Error Eccure When Login") :
                        formik.setFieldError("email", error?.response?.data?.message || "Error Eccure When Login");
                    setLoading(false);
                });
            }
        }
    )
    return (
        <form className='flex flex-col p-5 px-2 md:px-10 gap-8 mt-8 items-center' onSubmit={formik.handleSubmit}>
            <div className='w-1/2'>
                <InputDemo label={t("Auth.Login.Email")} placeHolder={t("Auth.Login.Email")} id="email" type="email" error={formik.errors.email} value={formik.values.email} onChange={formik.handleChange} />
            </div>
            <div className='w-1/2'>
                <InputDemo label={t("Auth.Login.Password")} placeHolder={t("Auth.Login.Password")} id="password" type="password" error={formik.errors.password} value={formik.values.password} onChange={formik.handleChange} />
            </div>
            <div>Create Ur Account Now  <Link to='/register' className='text-blue-500 underline'>Register</Link> </div>
            <button type="submit" disabled={Loading} className="bg-primary_Color text-white p-2 rounded-md w-1/2">{Loading ? "Loading..........." : t("Auth.Login.Header")}</button>
        </form>
    )
}

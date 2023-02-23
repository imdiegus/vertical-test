import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { fieldInterface } from '../../interfaces/formInterfaces'
import Input from '../commonComponents/Input'
import Button from '../commonComponents/Button'
import axiosClient from '../../config/axiosClient'
import { useNavigate } from "react-router-dom";
import string from '../../constants/strings'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setUser } from '../../slices/userSlice'

type Props = {}

export default function Login({ }: Props) {
    const dispatch = useAppDispatch()
    const router = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => handleLogin(),
        validationSchema: yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
        })
    })

    const fields: fieldInterface[] = [
        {
            label: 'email',
            type: 'email',
            name: 'email'
        },
        {
            label: 'password',
            type: 'password',
            name: 'password'
        }
    ]

    const handleLogin = async () => {
        try {
            const res = await axiosClient().post('/users/login', {
                email: formik.values.email,
                password: formik.values.password
            })
            if (res.data.success) {
                dispatch(setUser(res.data.data))
                localStorage.setItem(string.locaStorageToken, res.data.data.token)
                router('/email/inbox')
            } else {
                console.log(res.data)
            }
        } catch (error) {
            console.error('[error]' + error)
        }
    }

    return (
        <div className=' grid grid-cols-2'>
            <div>
            </div>
            <div className='h-screen flex items-center
             justify-center'>
                <div className=' flex flex-col gap-y-6 text-customBlue'>
                    <p className='font-bold'>Hello, please enter your credentials!</p>
                    <div className='flex flex-col gap-4'>
                        {fields.map((item, index) => (
                            <div key={index} className='flex flex-col'>
                                <label className=' capitalize'>{item.label}</label>
                                <Input
                                    formik={formik}
                                    type={item.type}
                                    name={item.name}
                                />
                            </div>
                        )
                        )}
                        <Button
                            title='Login'
                            action={formik.handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
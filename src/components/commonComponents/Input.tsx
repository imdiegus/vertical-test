import React from 'react'
import { inputType } from '../../interfaces/formInterfaces'

type Props = {
  name: string
  formik: any
  type: inputType
}

export default function Input({ name, formik, type }: Props) {
  type key = keyof typeof formik.values
  const nameKey = name as key
  return (
    <div>
      <input
        className='py-1 px-2 outline-none focus:border-customWhite rounded-lg border border-slate-300'
        onChange={formik.handleChange}
        value={formik.values[nameKey]}
        name={name}
        type={type}
      />
      {/* {(formik.touched[nameKey] && formik.error[nameKey]) && <p>{formik.error[nameKey]}</p>} */}
    </div>
  )
}
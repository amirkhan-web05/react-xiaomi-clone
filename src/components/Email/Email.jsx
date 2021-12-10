import React from 'react'
import {useForm} from 'react-hook-form'
import {AppContext} from '../../context/context'
import { useHistory } from 'react-router-dom'
import styles from './Email.module.scss'
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yupResolver.object().shape({
//   email: yupResolver
//     .string()
//     .email("Email should have correct format")
//     .required("Email is a required field"),
// });

export const Email = () => {
  const {data, setValues} = React.useContext(AppContext)
  const history = useHistory()

  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      email:data.email
    },
    mode:'onBlur',
  })

  const onSubmit = (data) => {
    history.push('/')
    setValues(data)
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.popup_form}>
          <div className={styles.popup_form_inner}>
          {!!errors.email ? <div style={{color:'red'}} className='mt-3'>Введите верные данные</div> : ''}
            <input 
              {...register('email', { pattern: /^[A-Za-z]+$/i })}
              className={!!errors.email ? styles.popup_form_danger : styles.popup_form_input}
              placeholder='Email'
              name='email'
              type="text" 
              id='email' 
              label='email' 
              error={String(!!errors.email)}
              required
              helpertext={errors?.email?.message}
            />
          </div>
          <div style={{marginLeft:-90}} className='d-flex w-100 mt-3 justify-content-end'>
            {/* <button onClick={onClose} style={{marginRight:15}} className='btn btn-primary'>Close</button> */}
            <button className='btn btn-primary' type='submit'>Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

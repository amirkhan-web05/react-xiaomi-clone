import React from 'react'
import styles from './Modal.module.scss'
import {useForm} from 'react-hook-form'
import {AppContext} from '../../context/context'
import { useHistory } from 'react-router-dom'
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// export const schema = yupResolver.object().shape({
//     name: yupResolver
//        .string()
//        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
//        .required("First name is a required field"),
//     surname: yupResolver
//        .string()
//        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
//        .required("Last name is a required field")
// });

export const Modal = ({onClose}) => {
  const {data, setValues} = React.useContext(AppContext)
  const history = useHistory()

  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      name:data.name,
      surname:data.surname
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
        <span onClick={onClose} style={{marginRight:'20px', fontSize:'30px', cursor:'pointer'}} className='d-flex justify-content-end'>&times;</span>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.popup_form}>
          <div className={styles.popup_form_inner}>
            {!!errors.name ? <div style={{color:'red'}}>Введите верные данные</div> : ''}
            <input 
              {...register('name')}
              className={!!errors.name ? styles.popup_form_danger : styles.popup_form_input}
              placeholder='Name'
              name='name'
              type="text" 
              id='name' 
              label='name' 
              error={String(!!errors.name)}
              required
              helpertext={errors?.name?.message}
            />
          </div>
          <div className={styles.popup_form_inner}>
          {!!errors.name ? <div style={{color:'red'}} className='mt-2'>Введите верные данные</div> : ''}
            <input 
              {...register('surname')}
              className={!!errors.surname ? styles.popup_form_danger : styles.popup_form_input}
              type="text" 
              name='surname'
              placeholder='Surname'
              id='last' 
              label='last' 
              error={String(!!errors.surname)}
              required
              helpertext={errors?.surname?.message}
            />
          </div>
          <div style={{marginLeft:-90}} className='d-flex w-100 mt-3 justify-content-end'>
            <button onClick={onClose} style={{marginRight:15, width:'25%'}} className='btn btn-secondary'>Close</button>
            <button style={{width:'30%'}} className='btn btn-warning' type='submit'>Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

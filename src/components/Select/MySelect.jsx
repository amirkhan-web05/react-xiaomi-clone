import React from 'react'

export const MySelect = ({option, defaultValue, value, onChange}) => {
  return (
    <select
      className='form-select w-25'
      aria-label="Default select example"
      value={value}
      style={{position:'relative'}}
      onChange={event => onChange(event.target.value)}
    >
      <option value="">{defaultValue}</option>
      {option.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

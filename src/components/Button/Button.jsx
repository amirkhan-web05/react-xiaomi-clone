import React from 'react'
import prevSlider from '../../assets/images/left-arrow (1).png'
import nextSlider from '../../assets/images/next.png'
import './Button.scss'

export const Button = ({direction, slider}) => {
  return (
    <div 
      className={direction === 'next' ? 'btn_slide_next' : 'btn_slide_prev'} 
      onClick={slider}>
      <img className='arrow' src={direction === 'next' ? prevSlider : nextSlider} alt="" />
    </div>
  )
}

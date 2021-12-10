import React from 'react'
import { Button } from '../Button/Button'
import styles from './Banner.module.scss'

const dataSlider = [
    {
        id:1,
        images:'https://i02.appmifile.com/391_operator_in/29/11/2021/c1b7c909f4df932e9936f37fd9fd44ab.jpg'
    },
    {
        id:2,
        images:'https://i02.appmifile.com/232_operator_in/25/11/2021/7258c6c4759701c61555123e1a1644ca.jpg'
    },
    {
        id:3,
        images:'https://i02.appmifile.com/613_operator_in/18/10/2021/0c3f90b2064347e706e2d97ec142bf01.jpg'
    },
    {
        id:4,
        images:'https://i01.appmifile.com/webfile/globalimg/chewing/1920_770.png'
    },
    {
        id:5,
        images:'https://i02.appmifile.com/864_operator_in/13/10/2021/7f801f56f4a0ff39e40f87fa68069938.jpg'
    },
]

const Banner = () => {
    const [slideIndex, setSlideIndex] = React.useState(1)

    const nextSlide = () => {
        if(slideIndex + 1 <= dataSlider.length){
            setSlideIndex(prevIndex => prevIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(prevIndex => prevIndex - 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div>
            {dataSlider.map((item, index) => (
                <div key={item.id} className={slideIndex === index + 1 ? styles.active_anim : styles.slide}>
                    <img width='100%' src={item.images} alt="" />
                </div>
            ))}
            <div className="d-flex align-items-center">
                <Button slider={nextSlide} direction='next'/>
                <Button slider={prevSlide} direction='prev'/>
            </div>
            <div className={styles.container_dot}>
                {Array.from({length:5}).map((_, index) => (
                    <div 
                        key={index}
                        onClick={() => moveDot(index + 1)} 
                        className={slideIndex === index + 1 ? styles.dot : styles.active}
                    ></div>
                ))}
            </div>
        </div>        
    )
}

export default Banner
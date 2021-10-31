import React from 'react'
import styles from './Promo.module.scss'

const promoPhotoes = [
    {
        id:1,
        photoes:'https://i02.appmifile.com/16_operator_in/20/10/2021/16cfd7862136b6d43832b5a11220292b.png?width=398&height=230'
    },
    {
        id:2,
        photoes:'https://i02.appmifile.com/530_operator_in/20/10/2021/e91410b875a533f88183846f9197783e.png?width=398&height=230'
    },
    {
        id:3,
        photoes:'https://i02.appmifile.com/844_operator_in/20/10/2021/248db2bff89412c0cea36787a833e107.png?width=398&height=230'
    }
]

const Promo = () => {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center mt-3 mb-4">
                {promoPhotoes.map(photo => (
                    <div style={{margin:'0 7px'}} key={photo.id}>
                        <img className={styles.promo_photo} src={photo.photoes} alt="" />
                    </div>
                ))}
            </div>
            <div className='mb-3 d-flex justify-content-center'>
                <img className={styles.promo_photo} src="https://i02.appmifile.com/587_operator_in/21/10/2021/11fc599de3b32794a87d9076fe4c4a8a.jpg" alt="" />
            </div>
            <div className='mb-3 d-flex justify-content-center'>
                <img className={styles.promo_photo} src="https://i01.appmifile.com/webfile/globalimg/29/BF0BB33C-23CC-A594-31EC-72F79834EB78.jpg" alt="" />
            </div>
        </div>
    )
}

export default Promo
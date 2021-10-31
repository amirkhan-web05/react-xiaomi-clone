import React from 'react'
import { AppContext } from '../context/context'
import styles from './Products.module.scss'

const Products = () => {
    const {miDesk} = React.useContext(AppContext)

    return (
        <div className='container'>
            <div className="products">
                <h2 className='text-center mt-3 mb-3'>ИЗБРАННЫЕ ПРОДУКТЫ</h2>
                <div className="products__inner d-flex mb-3 justify-content-center flex-wrap">
                    {miDesk.map(photo => (
                        <div style={{margin:'0 5px'}} key={photo.id}>
                            <img className={styles.products_photo} src={photo.images} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
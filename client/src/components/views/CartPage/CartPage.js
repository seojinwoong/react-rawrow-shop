import React from 'react'
import './Sections/CartPage.css';

function CartPage() {
    return (
        <div className='container cart-page'>
            <h2 className="page-title">장바구니</h2>

            <div className="cart-lists">
                <p className="no-data">장바구니가 비어있습니다.</p>
            </div>

            <p className="btn-wrap"><button>ORDER</button></p>
        </div>
    )
}

export default CartPage

import React from 'react';
import './Sections/ProductDetailPage.css';

import introImg1 from '../../../img/intro_page_01.jpg';
import introImg2 from '../../../img/intro_page_02.jpg';
import introImg3 from '../../../img/intro_page_03.jpg';
import introImg4 from '../../../img/intro_page_04.jpg';
import introImg5 from '../../../img/intro_page_05.jpg';

function ProductDetailPage(props) {
    const productId = props.match.params.productId;
    console.log('asd', productId);

    return (
        <div className="product-detail-page" style={{ padding: '0 10% '}}>

            {/* product-content-wrap */}
            <div className="product-content-wrap">
                <img src={introImg1} alt="메인이미지2" className="intro-img"/>
                <img src={introImg2} alt="메인이미지2" className="intro-img"/>
                <img src={introImg3} alt="메인이미지2" className="intro-img"/>
                <img src={introImg4} alt="메인이미지2" className="intro-img"/>
                <img src={introImg5} alt="메인이미지2" className="intro-img"/>
            </div>
            {/* // product-content-wrap*/}

            {/* product-detail-wrap  */}
            <div className="product-detail-wrap">
                <section className="order-box">
                    <p className="product-title">STRING BACKPACK COLOR BLOCK 754 PURPLE & YELLOW</p>
                    <p className="price-wrap">
                        <span className="price">75,600원</span>
                        <span className="mileage">3,780 마일리지(5%)</span>
                    </p>
                    <table className="order-table">
                        <tr>
                            <td style={{width: '50%'}}>STRING BACKPACK COLOR BLOCK 754 PURPLE & YELLOW</td>
                            <td style={{width: '25%'}}>
                                <span className="btns minus"></span>
                                <input type="number" className="btns" />
                                <span className="btns plus"></span>
                            </td>
                            <td style={{width: '25%'}}>
                                <p>75,600원</p>
                                <p>(3,780 마일리지)</p>
                            </td>
                        </tr>
                    </table>
                    <p className="total-price">총 상품금액 : 151,200 원</p>
                    <button className="buy-now">BUY NOW</button>
                    <button className="add-to-cart">ADD TO CART</button>
                </section>

                <section className="p-comment-box">
                    
                </section>
            </div>
            {/* // product-detail-wrap */}

        </div>
    )
}

export default ProductDetailPage

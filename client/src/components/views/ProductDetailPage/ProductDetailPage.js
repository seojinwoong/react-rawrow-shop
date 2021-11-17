import React from 'react';
import './Sections/ProductDetailPage.css';

// fontawesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import introImg1 from '../../../img/intro_page_01.jpg';
import introImg2 from '../../../img/intro_page_02.jpg';
import introImg3 from '../../../img/intro_page_03.jpg';
import introImg4 from '../../../img/intro_page_04.jpg';
import introImg5 from '../../../img/intro_page_05.jpg';
import quality_program from '../../../img/quality_program.jpg';

function ProductDetailPage(props) {
    const productId = props.match.params.productId;

    return (
        <div className="product-detail-page clearfix">

            {/* product-content-wrap */}
            <div className="product-content-wrap">
                <img src={introImg1} alt="메인이미지2" className="intro-img mb20"/>
                <img src={introImg2} alt="메인이미지2" className="intro-img mb20"/>
                <img src={introImg3} alt="메인이미지2" className="intro-img mb20"/>
                <img src={introImg4} alt="메인이미지2" className="intro-img mb20"/>
                <img src={introImg5} alt="메인이미지2" className="intro-img mb20"/>
            </div>
            {/* // product-content-wrap*/}

            {/* product-detail-wrap  */}
            <div className="product-detail-wrap">
                <section className="order-box">
                    <img src={introImg1} alt="메인이미지2" className="show-if-layout-change"/>
                    <p className="product-title">STRING BACKPACK COLOR BLOCK 754 PURPLE & YELLOW</p>
                    <p className="price-wrap">
                        <span className="price">75,600원</span>
                        <span className="mileage">3,780 마일리지(5%)</span>
                    </p>
                    <table className="order-table">
                        <tr>
                            <td style={{width: '55%'}}>STRING BACKPACK COLOR BLOCK 754 PURPLE & YELLOW</td>
                            <td style={{width: '20%'}}>
                                <span className="btns"><FontAwesomeIcon icon={faMinus}/></span>
                                <input className="btns" type="number" value='1' />
                                <span className="btns"><FontAwesomeIcon icon={faPlus}/></span>
                            </td>
                            <td>
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
                    <p className="title-section main-c">상품설명</p>
                    <p className="content-section">
                        트립웨어를 만드는 로우로우의 베스트 셀러, 당기면 끝나는 외출 준비 ‘스트링 시리즈’
                        스트링 시리즈는 최초의 가방 역할을 했던 지게와 짐을 고정하는 끈의 역할에서 아이디어가 시작되었고, 이를 발전시켜 끈을 당겨서 조이고 푸는 방식으로 완성한 가방입니다.
                    </p>
                    <p className="title-section main-c">주의사항</p>
                    <p className="content-section">
                        트립웨어를 만드는 로우로우의 베스트 셀러, 당기면 끝나는 외출 준비 ‘스트링 시리즈’
                        스트링 시리즈는 최초의 가방 역할을 했던 지게와 짐을 고정하는 끈의 역할에서 아이디어가 시작되었고, 이를 발전시켜 끈을 당겨서 조이고 푸는 방식으로 완성한 가방입니다.
                    </p>

                    <a href="javascript:;" className="link-box mb20">
                        가입 시 바로 쓰는 마일리지 <br/>
                        1만원 <br/>
                        무엇을 사도 5% 적립
                    </a>
                    <a href="javascript:;" className="link-box mb20">
                        구매한 사람을 위하여 - <br/>
                        #전액환불 합니다.
                    </a>
                    <a href="javascript:;" className="link-box">
                        <img src={quality_program} alt="일생 LIMITED LIFETIME WARRANTY" className="warranty-img mb10" />
                        끝까지 책입지는<br/>
                        평생 품질보증 프로그램
                    </a>
                    
                </section>
            </div>
            {/* // product-detail-wrap */}

        </div>
    )
}

export default ProductDetailPage

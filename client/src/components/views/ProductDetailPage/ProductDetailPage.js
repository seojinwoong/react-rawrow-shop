import React, { useState, useEffect } from 'react';
import './Sections/ProductDetailPage.css';
import axios from 'axios';
import { comma, uncomma } from '../../utils/utils.js';

// fontawesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import quality_program from '../../../img/quality_program.jpg';

function ProductDetailPage(props) {
    const productId = props.match.params.productId;
    const [Product, setProduct] = useState({}); 
    const [PageLoad, setPageLoad] = useState(false);
    let [BuyingProducts, setBuyingProducts] = useState([]);

    useEffect(() => {
        setPageLoad(false);
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0]);
                setPageLoad(true);
            })

            .catch(err => {
                alert('상품상세정보를 조회하는 과정에서 오류가 발생하였습니다');
                console.log('에러내용', err);
                return false;
            })
    }, [])

    const sizeChoiceHandler = (e) => {
        if (e.target.value !== "") {
            if (BuyingProducts.length <= 0) {
                setBuyingProducts([ {size: e.target.value, amount:1} ]);
            } else {
                let flag = true;
                BuyingProducts.forEach((el) => {
                    if (el.size === e.target.value) {
                        flag = false;
                        return false;
                    }
                })
                if (flag) {
                    setBuyingProducts([...BuyingProducts, {size: e.target.value, amount: 1} ]);
                }
            }
        }
    }

    const totalPrice = () => {
        let results = 0;
        BuyingProducts.forEach((el) => {
            results += +(uncomma(Product.price) * el.amount);
        });
        return comma(results);
    }

    const buyProductHandler = (e, targets, eventType) => {
        let copy = [...BuyingProducts];
        let resultIdx = copy.findIndex((el, idx) => {
            return el.size === targets;
        });
        if (resultIdx > -1) {
            if (eventType == 'minus') { 
                if (copy[resultIdx].amount >= 2) {
                    copy[resultIdx].amount -= 1;
                } 
            } else if (eventType == 'plus') {
                copy[resultIdx].amount += 1;
            } else {
                copy[resultIdx].amount = e.target.value ? +e.target.value : 1;
            }
            setBuyingProducts(copy);
        }
    }

    return (
        <div className={`product-detail-page clearfix ${PageLoad && 'page-show'}`}>
            {/* product-content-wrap */}
            <div className="product-content-wrap">
                {Product.images && Product.images.map((el, idx) => (
                    <img key={idx} src={`http://localhost:5000/${el}`} alt="이미지" className="intro-img mb20"/>
                ))}
            </div>
            {/* // product-content-wrap*/}

            {/* product-detail-wrap  */}
            <div className="product-detail-wrap">
                <section className="order-box">
                {Product.images && <img src={`http://localhost:5000/${Product.images[0]}`} alt="" className="show-if-layout-change"/> }
                    <p className="product-title">{Product.title}</p>
                    <p className="price-wrap">
                        <span className="price">{Product.price}원</span>
                        <span className="mileage">{comma(uncomma(Product.price) * 0.05)} 마일리지(5%)</span>
                    </p>

                    <select className="choice-size mt10 mt20" onChange={sizeChoiceHandler}>
                        <option value="">사이즈선택</option>
                        {
                            Product.size && Product.size.map((el, idx) => (
                                <option key={idx} value={el.size}>{el.size}</option>
                            ))
                        }
                    </select>

                    <table className="order-table">
                    {
                        BuyingProducts.length > 0 
                        && 
                        BuyingProducts.map((buyingPrducts) => (
                            <tr key={buyingPrducts.size}>
                                <td style={{width: '55%'}}>{Product.title} - <span className="main-c">{buyingPrducts.size} SIZE</span></td>
                                <td style={{width: '20%'}}>
                                    <span className="btns" onClick={(e)=>{buyProductHandler(e, buyingPrducts.size, 'minus')}}><FontAwesomeIcon icon={faMinus}/></span>
                                    <input className="btns" type="number" value={buyingPrducts.amount} onChange={(e)=>{buyProductHandler(e, buyingPrducts.size, 'inputs')}} min="1"/>
                                    <span className="btns" onClick={(e)=>{buyProductHandler(e, buyingPrducts.size, 'plus')}}><FontAwesomeIcon icon={faPlus}/></span>
                                </td>
                                <td>
                                    <p>{comma(uncomma(Product.price) * buyingPrducts.amount)}원</p>
                                    <p>
                                        (
                                        {comma(uncomma(Product.price) * 0.05 * buyingPrducts.amount)}
                                        마일리지)
                                    </p>
                                </td>
                            </tr>
                        ))
                    }
                    </table>
                    <p className="total-price">총 상품금액 : {totalPrice()} 원</p>
                    <button className="buy-now">BUY NOW</button>
                    <button className="add-to-cart">ADD TO CART</button>
                </section>

                <section className="p-comment-box">
                    <p className="title-section main-c">상품설명</p>
                    <p className="content-section">{Product.description}</p>
                    <p className="title-section main-c">주의사항</p>
                    <p className="content-section">{Product.caution}</p>

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

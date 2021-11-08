import React, { useEffect, useState } from 'react';
import './Sections/ProductsUploadPage.css';

// fontawesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function ProductsUploadPage() {
    let [SizeQuantity, setSizeQuantity] = useState(1);

    const btnClickHandler = (type) => {
        if (type == 'plus') {
            if (SizeQuantity < 6) {
                setSizeQuantity(++SizeQuantity);
            }
        }
        else {setSizeQuantity(--SizeQuantity);}
    }
    const inputHandler = (e) => {
        console.log('눌렀다');
    }

    const showSizeSelection = () => {
        let empty = [];
        for (let i = 0; i < SizeQuantity; i++) {
            empty.push(<p className="size-section">
                            <select className="common-input select-size">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="noSize">사이즈 없음</option>
                            </select>
                            <input type="number" className="common-input p-quantity" placeholder='해당 사이즈의 재고량을 입력해주세요'/>
                            <span className="ea">EA</span>
                        </p>
                        );
        }
        return empty;
    }
  
    return (
        <div className="container" id="productsUploadPage">
            <h2 className="page-title">상품업로드</h2>

            <form>
                {/* <FileUpload></FileUpload>                    */}
                
                <article className="row">
                    <label>상품명</label>
                    <input type="text" className="common-input"/>
                </article>

                <article className="row">
                    <label>상품 카테고리</label>
                    <select className="common-input">
                        <option value="1">가방</option>
                        <option value="2">안경</option>
                        <option value="3">의류</option>
                    </select>
                </article>

                <article className="row">
                    <label>가격</label>
                    <input type="number" className="common-input" data-element="money" onChange={inputHandler}/>
                </article>

                <article className="row">
                    <label>상품 설명</label>
                    <textarea className="common-input"></textarea>
                </article>

                <article className="row">
                    <label>상품 주의사항</label>
                    <textarea className="common-input"></textarea>
                </article>

                <article className="row">
                    <label>사이즈당 재고</label>
                    <div className='size-select-wrapper'>
                        {showSizeSelection()}

                        <FontAwesomeIcon icon={faPlusCircle} className="plus-size-btn size-btn" onClick={()=>{btnClickHandler('plus')}}/>
                        {
                            SizeQuantity > 1
                            && <FontAwesomeIcon icon={faMinusCircle} className="minus-size-btn size-btn" onClick={()=>{btnClickHandler('minus')}}/>
                        }
                    </div>
                </article>

                <button className="submit-btn">상품 업로드</button>
            </form>
        </div>
    )
}

export default ProductsUploadPage

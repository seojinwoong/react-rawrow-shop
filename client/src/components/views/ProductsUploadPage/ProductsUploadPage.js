import React, { useEffect, useState } from 'react';
import FileUpload from '../../utils/FileUpload';
import './Sections/ProductsUploadPage.css';

// fontawesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function ProductsUploadPage() {
    let [SizeQuantity, setSizeQuantity] = useState(1);
    const [Images, setImages] = useState([]);
    const [ProductSize, setProductSize] = useState([
        {size: 'S', sizeQuantity: ''}
    ]);

    const sizeHandler = (idx, event) => {
        let copy = [...ProductSize];
        copy[idx].size = event.target.value;
        setProductSize(copy);
    }
    const sizeQuantityHandler = (idx, event) => {
        let copy = [...ProductSize];
        copy[idx].sizeQuantity = event.target.value;
        setProductSize(copy);
    }

    const btnClickHandler = (type) => {
        if (type == 'plus') {
            if (SizeQuantity < 6) {
                setSizeQuantity(++SizeQuantity);
                let copy = [...ProductSize];
                copy.push({size:'S', sizeQuantity:''});
                setProductSize(copy);
            }
        }
        else {
            setSizeQuantity(--SizeQuantity);
            let copy = [...ProductSize];
            copy.slice(-1).pop();
            setProductSize(copy);
        }
    }
    const inputHandler = (e) => {
        console.log('눌렀다');
    }

    const showSizeSelection = () => {
        let returnHtml = [];
        for (let i = 0; i < SizeQuantity; i++) {
            returnHtml.push(<p className="size-section">
                            <select className="common-input select-size" onChange={(e)=>{sizeHandler(i, e)}} value={ProductSize[i].size}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="Free">사이즈 없음</option>
                            </select>
                            <input type="number" 
                            className="common-input p-quantity" 
                            placeholder='해당 사이즈의 재고량을 입력해주세요'
                            value={ProductSize[i].sizeQuantity}
                            onChange={(e)=>{sizeQuantityHandler(i, e)}}
                            />
                            <span className="ea">EA</span>
                        </p>
                        );
        }
        return returnHtml;
    }

    const setFiles = (newImages) => {
        setImages(newImages);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        ProductSize.map((el,idx) => {
            let current = ProductSize[idx].size;
            for (let key in ProductSize) {
                if (ProductSize[key].size == current ) {
                    alert('사이즈 선택값은 중복될 수 없습니다.');
                    return false;
                }
            }
        })
        // for (let i = 0; i< ProductSize.length; i++) {
        //     const current = ProductSize[i].size;
        //     let flag = false;
        //     for (let j = i+1; j < ProductSize.length; j++) {
        //         if (current == ProductSize[j].size) {
        //             flag = true;
        //             break;
        //         }
        //     }
        //     if(flag) {
        //         alert('사이즈 선택값은 중복될 수 없습니다.');
        //         return false;
        //     }

        // }
    }
  
    return (
        <div className="container" id="productsUploadPage">
            <h2 className="page-title">상품업로드</h2>

            <form onSubmit={submitHandler}>
                 <article className="row">
                    <label>상품사진 업로드</label>
                    <FileUpload refreshFunction={setFiles}></FileUpload>
                </article>
                
                <article className="row">
                    <label>상품명</label>
                    <input type="text" className="common-input" data-element="p-name" onChange={inputHandler}/>
                </article>

                <article className="row">
                    <label>상품 카테고리</label>
                    <select className="common-input" data-element="p-category" onChange={inputHandler} >
                        <option value="1">가방</option>
                        <option value="2">안경</option>
                        <option value="3">의류</option>
                    </select>
                </article>

                <article className="row">
                    <label>가격</label>
                    <input type="number" className="common-input" data-element="money" data-element="p-price" onChange={inputHandler}/>
                </article>

                <article className="row">
                    <label>상품 설명</label>
                    <textarea className="common-input" data-element="p-description" onChange={inputHandler}></textarea>
                </article>

                <article className="row">
                    <label>상품 주의사항</label>
                    <textarea className="common-input" data-element="p-caution" onChange={inputHandler}></textarea>
                </article>

                <article className="row">
                    <label>사이즈당 재고</label>
                    <div className='size-select-wrapper'>
                        {showSizeSelection()}

                        <span onClick={()=>{btnClickHandler('plus')}}><FontAwesomeIcon icon={faPlusCircle} className="plus-size-btn size-btn"/></span>
                        {
                            SizeQuantity > 1
                            && <span onClick={()=>{btnClickHandler('minus')}}><FontAwesomeIcon icon={faMinusCircle} className="minus-size-btn size-btn"/></span>
                        }
                    </div>
                </article>

                <button className="submit-btn">상품 업로드</button>
            </form>
        </div>
    )
}

export default ProductsUploadPage

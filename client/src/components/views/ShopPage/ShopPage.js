import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Sections/ShopPage.css';

function ShopPage(props) {
  const [Category, setCategory] = useState(props.match.params.category);
  const [ProductArray, setProductArray] = useState([]);
  const [Limit, setLimit] = useState(16);
  const [Skip, setSkip] = useState(0);
  const [PostSize, setPostSize] = useState(0);
  const [PageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    let body = {
        skip: Skip,
        limit: Limit,
        category: Category
    }
    getProducts(body);
  }, []);

  const getProducts = (body) => {
    axios.post('/api/product/products', body)
        .then(response => {
            if (response.data.success) {
                if (body.isLoadMore) {
                    setProductArray([...ProductArray, response.data.productInfo]);
                } else {
                    console.log('호호', response.data.productInfo);
                    setProductArray(response.data.productInfo);
                }
                setPostSize(response.data.postSize);
                setPageLoad(true);
            } else {
                alert('상품들을 가져오는데 실패했습니다.');
            }
        })
  }

  return (
    <div className={PageLoad ? "shop-page load" : "shop-page"}>
      <h2 className="page-title shop-title">
        {Category == 1 ? 'BAG' : Category == 2 ? 'EYE' : 'WEAR'}
      </h2>
      
      <ul className="product-lists-wrap clearfix">
          {
              ProductArray.map((el, idx) => (
                <li className="product-list">
                    <a href={`/product/${el._id}`}>
                        <div className="img-thumb">
                            <img className='thumb' src={`http://localhost:5000/${el.images[0]}`} alt='상품 이미지'/>
                            {  el.images.length >= 2 && <img className='hover-thumb' src={`http://localhost:5000/${el.images[1]}`} alt='상품 이미지'/> }
                        </div>
                        <div className="product-cont">
                            <p className="p-name">{el.title}</p>
                            <p className='p-price'>{el.price}원</p>
                        </div>
                    </a>
                </li>
              ))
          }
      </ul>
    </div>
  );
}

export default ShopPage;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Sections/ShopPage.css';
import LoadingIcon from "../../utils/LoadingIcon";

function SearchResultPage(props) {
  const [SearchText, setSearchText] = useState(props.match.params.searchText);
  const [ProductArray, setProductArray] = useState([]);

  useEffect(() => {
    let body = {
    }

    getProducts(body);
  }, []);

  const getProducts = (body) => {
    setPageLoad(true);
    axios.post('/api/product/products', body)
        .then(response => {
            if (response.data.success) {
                if (body.isLoadMore) {
                    setProductArray([...ProductArray, ...response.data.productInfo]);
                } else {
                    setProductArray(response.data.productInfo);
                }
                setPostSize(response.data.postSize);
                setPageLoad(false);
            } else {
                alert('상품들을 가져오는데 실패했습니다.');
            }
        })
  }

  return (
    <div className="search-result-page">
      <h2 className="page-title result-title">검색결과</h2>
      <h3 className="search-value">검색내용 : {SearchText}</h3>

      {/* {
        ( PageLoad === false && ProductArray.length == 0 ) &&
        <p className="no-data">상품이 존재하지 않습니다.</p>       
      }
      <ul className="product-lists-wrap">
          {
              ProductArray.map((el, idx) => (
                <li className="product-list">
                    <a href={`/product/${el._id}`}>
                        <div className="img-thumb clearfix">
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
      {
        PostSize >= Limit &&
        <p className="more-btn-wrap" onClick={loadMoreItems}>더보기</p>
      }
      {PageLoad && <LoadingIcon/>} */}
    </div>
  );
}

export default SearchResultPage;

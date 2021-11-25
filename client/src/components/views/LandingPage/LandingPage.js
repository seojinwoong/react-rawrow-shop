import React, { useState, useEffect } from 'react'
import './Sections/LandingPage.css';
import introImg1 from '../../../img/intro_page_01.jpg';
import introImg2 from '../../../img/intro_page_02.jpg';
import introImg3 from '../../../img/intro_page_03.jpg';
import introImg4 from '../../../img/intro_page_04.jpg';
import introImg5 from '../../../img/intro_page_05.jpg';

function LandingPage() {
    const [ScrollY, setScrollY] = useState(0);
    
    const listener = () => {
        setScrollY(window.scrollY);
        let lists = document.querySelectorAll('.intro-list-wrap > li');
        lists.forEach(function(el,idx){
            if (ScrollY >= el.getBoundingClientRect().top - 600) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }
    useEffect(() => {
        let timer = setTimeout(()=> {
            document.querySelector('.first-lists').classList.add('active');
        },500);
        return () => {clearTimeout(timer);}
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, [])
    return (
        <div className="main-page-wrapper">
            <ul className="intro-list-wrap">
                <li className="first-lists">
                    <a href="/shop/3">
                        <img src={introImg1} alt="메인이미지1" className="intro-img"/>
                        <p className='clearfix'>
                            <span className="intro-title">THE NEW R WEAR</span>
                            <span className="intro-context">
                                드는 가방 대신 입는 가방<br/>
                                SHOP NOW
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/shop/2">
                        <img src={introImg2} alt="메인이미지2" className="intro-img"/>
                        <p className='clearfix'>
                            <span className="intro-title">R EYE</span>
                            <span className="intro-context">
                                10년을 쓰는 안경<br/>
                                SHOP NOW
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/shop/1">
                        <img src={introImg3} alt="메인이미지3" className="intro-img"/>
                        <p className='clearfix'>
                            <span className="intro-title">STRING COLOR <br/>BLOCK</span>
                            <span className="intro-context">
                                스트링을 더 쌩쌩하게 색칠한<br/>
                                SHOP NOW
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/shop/1">
                        <img src={introImg4} alt="메인이미지4" className="intro-img"/>
                        <p className='clearfix'>
                            <span className="intro-title">CORDUROY SERIES</span>
                            <span className="intro-context">
                                따뜻한 코듀로이를 만난 R BAG<br/>
                                SHOP NOW
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/shop/3">
                        <img src={introImg5} alt="메인이미지5" className="intro-img"/>
                        <p className='clearfix'>
                            <span className="intro-title">RAW TRIP</span>
                            <span className="intro-context">
                                훌쩍 떠나고 싶은 사람을 위하여<br/>
                                SHOP NOW
                            </span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default LandingPage

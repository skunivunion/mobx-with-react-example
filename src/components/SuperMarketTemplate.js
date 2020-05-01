import React from 'react';
import '../css/SuperMarketTemplate.css';

// SuperMarketTemplate 는 그냥 템플릿 형태의 컴포넌트로서
// 한쪽에는 상품을, 한쪽에는 장바구니를 props 로 받아와서 보여줍니다.
const SuperMarketTemplate = ({ items, basket, total }) => {
    return (
        <div className="SuperMarketTemplate">
            <div className="items-wrapper">
                <h2>상품</h2>
                {items}
            </div>
            <div className="basket-wrapper">
                <h2>장바구니</h2>
                {basket}
                {total}
            </div>
        </div>
    );
};

export default SuperMarketTemplate;
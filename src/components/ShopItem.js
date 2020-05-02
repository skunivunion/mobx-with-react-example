import React from 'react';
import '../css/ShopItem.css';

// ShopItem Component : Display Component
// 부모 컴포넌트로부터 name, price, onPut()를 props로 받는다.
const ShopItem = ({ name, price, onPut }) => {
    return (
    // 컴포넌트에 함수를 전달해 줄 때에는 미리 바인딩 하는것이 좋고,
    // 파라미터(name, price)가 유동적일 땐 
    // 파라미터를 넣는 작업을 컴포넌트 안에서 하는것이 좋다.
    <div className="ShopItem" onClick={() => onPut(name, price)}>
            <h4>{name}</h4>
            <div>{price}원</div>
        </div>
    );
};

export default ShopItem;
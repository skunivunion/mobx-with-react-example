import React from 'react';
import '../css/ShopItem.css';

const ShopItem = ({ name, price, onPut }) => {
    return (
    // 컴포넌트에 함수를 전달해 줄 때에는 미리 바인딩 하는것이 좋고,
    // 파라미터가 유동적일땐 파라미터를 넣는 작업을 컴포넌트 안에서 하는것이 좋습니다.
    <div className="ShopItem" onClick={() => onPut(name, price)}>
            <h4>{name}</h4>
            <div>{price}원</div>
        </div>
    );
};

export default ShopItem;
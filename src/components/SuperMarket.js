import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const SuperMarket = () => {
    return (
        // SuperMarketTemplate은 '아이템 리스트', '장바구니 아이템 리스트', '총합' 컴포넌트로 구성
        <SuperMarketTemplate            // 템플릿 형태의 컴포넌트
            items={<ShopItemList />}    // 아이템(상품) 리스트
            basket={<BasketItemList />} // 장바구니 아이템 리스트
            total={<TotalPrice />}      // 아이템 전체 가격
        />
    );
};

export default SuperMarket;
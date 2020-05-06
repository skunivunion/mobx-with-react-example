import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';

// 장바구니 아이템 컴포넌트
// props(from market 스토어) : 아이템 리스트, 총 가격, 갖다놓기(market.take()) 함수
const BasketItemList = ({ items, onTake }) => {
    // 장바구니 이이템 정보, key는 아이템 이름,
    // onTake 함수를 자식 컴포넌트에 넘겨 표시하도록 한다.
    const itemList = items.map(item => (
        <BasketItem item={item} key={item.name} onTake={onTake} />
    ));

    // 표시되는 장바구니 아이템 리스트 리턴
    return <div>{itemList}</div>;
};

// **** inject, observer 적용
// market 스토어 인젝트
export default inject(({ market }) => ({
    items: market.selectedItems,    // items === market.selectedItems
    onTake: market.take,            // onTake === market.take()
}))(observer(BasketItemList));
import React from 'react';
import ShopItem from './ShopItem';
import { inject, observer } from 'mobx-react'; // 불러오기

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

// **** onPut 함수 추가됨
// 리스트를 렌더링 할 땐, 컴포넌트에 리스트 관련 데이터만 props 로 넣는다.
// 세부참조(혹은 역참조: 특정 객체의 내부의 값을 조회하는 것)는 최대한 늦게한다.
const ShopItemList = ({ onPut }) => {
    const itemList = items.map(item => (
      <ShopItem {...item} key={item.name} onPut={onPut} />
    ));
    return <div>{itemList}</div>;
};

// **** inject, observer 적용
export default inject(({ market }) => ({
    onPut: market.put,
}))(observer(ShopItemList));

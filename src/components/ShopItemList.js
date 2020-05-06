import React from 'react';
import ShopItem from './ShopItem';
import { inject, observer } from 'mobx-react'; // 불러오기

// 아이템 정의
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

// ShopItemList Component
// props (from market Store) : onPut 함수 (= market.put())
// 세부참조(혹은 역참조: 특정 객체의 내부의 값을 조회하는 것)는 최대한 늦게한다.
const ShopItemList = ({ onPut }) => {
  // 아이템 리스트에서 각 이이템 정보를 복사한 값, key는 아이템 이름,
  // onPut 함수를 자식 컴포넌트에 넘겨 표시하도록 한다.
  const itemList = items.map(item => (  // 아이템 리스트로 생성
    <ShopItem {...item} key={item.name} onPut={onPut} />  // {...item} : 복사한 아이템 객체 {name, price}
  ));

  // 리스트를 렌더링할 땐, 컴포넌트에 리스트 관련 데이터만 props 로 넣는다.
  return <div>{itemList}</div>;
};

// **** inject, observer 적용
// market 스토어 인젝트
export default inject(({ market }) => ({
    onPut: market.put,  // // market 스토어에서 put() 함수만 props 로 전달받아서 사용 (onPut())
}))(observer(ShopItemList));


// @inject('market')  // market 스토어를 props 로 전달받아서 사용
// @observable
// class ShopItem extends Component {
//   retnder () {
//     const { onPut } = this.props; // market 스토어에서 onPut 함수만 props 로 전달받아서 사용
//     const itemList = items.map(item => (  // 아이템 리스트로 생성
//       <ShopItem {...item} key={item.name} onPut={onPut} />  // {...item} : 복사한 아이템 객체
//     ));  
//     // 리스트를 렌더링할 땐, 컴포넌트에 리스트 관련 데이터만 props 로 넣는다.
//     return <div>{itemList}</div>;
//   }
// }
// export default ShopItem;

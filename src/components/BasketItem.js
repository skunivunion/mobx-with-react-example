import React from 'react';
import '../css/BasketItem.css';
import { observer } from 'mobx-react';

const BasketItem = ({ item, onTake }) => {
  return (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onTake(item.name)}>갖다놓기</div>
    </div>
  );
};

// 리스트를 렌더링하게 될 때에
// 내부에 있는 컴포넌트에도 observer 를 구현해주어야, 성능적으로 최적화가 일어난다.
export default observer(BasketItem);

// // or
// // 리스트를 렌더링하게 될 때에
// // 내부에 있는 컴포넌트에도 observer 를 구현해주어야, 성능적으로 최적화가 일어난다.
// const BasketItem = observer(({ item, onTake }) => {
//     return (
//       <div className="BasketItem">
//         <div className="name">{item.name}</div>
//         <div className="price">{item.price}원</div>
//         <div className="count">{item.count}</div>
//         <div className="return" onClick={() => onTake(item.name)}>갖다놓기</div>
//       </div>
//     );
// });
  
// export default BasketItem;
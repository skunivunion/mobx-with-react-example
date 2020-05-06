import { observable, action, computed } from 'mobx';

// MarketStore에 @observable 값과 @action 함수 정의
export default class MarketStore {
  // observable ==> 선택한 품목
  @observable selectedItems = [];

  // MarketStore의 루트 스토어를 설정
  constructor(root) {
      this.root = root;
  }

  // 장바구니에 넣기 ((@observable 변수) selectedItems[] 변경 --> 화면 갱신)
  @action
  put = (name, price) => {  // 아이템(품목)명과 가격을 파라미터로 받는다.
    // counter(this.root.counter -> CounterStore)로부터 현재 counter값을 가져온다.
    const { number } = this.root.counter;
    // 현재 장바구니에 담긴 아이템인가?
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      // 장바구니에 없는 아이템이면 새로 집어넣습니다. (아이템 정보: name, price, count)
      this.selectedItems.push({ // 구매 아이템(객체)을 넣는다.
        name,   // === name: name,
        price,  // === price: price,
        count: number,
      });
      return;
    }
    // 장바구니에 존재 한다면 count 값만 올립니다.
    exists.count += number;
  };

  // 갖다 놓기 (장바구니에서 하나씩 뺀다.
  @action
  take = name => {
    // 갖다 놓을 아이템(객체) 정보 획득 (장바구니에 담긴 아이템 '갖다놓기' 클릭)
    const itemToTake = this.selectedItems.find(item => item.name === name);
    // 하나 감소 ((@observable 변수) selectedItems[] 내의 아이템 정보 변경 --> 화면 갱신))
    itemToTake.count--;    
    if (itemToTake.count === 0) {
      // 갯수가 0 이면 배열에서 제거처리합니다.
      this.selectedItems.remove(itemToTake);
    }
  };

  // observable으로 지정한 값(selectedItems[])의 상태가 변할 때마다, computed 함수가 실행된다.
  @computed
  get total() {
    console.log('총합 계산...');
    // 장바구니 아이템(this.selectedItems[]) 합계 계산
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}
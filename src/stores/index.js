import CounterStore from './CounterStore';
import MarketStore from './MarketStore';

// 스토어들(counter, market)을 모두 포함하는 루트 스토어 생성
class RootStore {
  constructor() {
    // this 를 파라미터를 넣어주는게 중요: 각 스토어들이 현재 루트 스토어가 무엇인지 알 수 있다.
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}

export default RootStore;
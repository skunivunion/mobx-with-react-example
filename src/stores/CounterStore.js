import { observable, action } from 'mobx';

// CounterStore에 @observable 값과 @action 함수 정의
export default class CounterStore {
    // 
    @observable number = 1; // ****  기본 값 1로 업데이트

    // CounterStore의 루트 스토어를 설정
    constructor(root) {
        this.root = root;
    }

    // 증가 함수 정의
    @action increase = () => {
        this.number++;
    }

    // 감소 함수 정의
    @action decrease = () => {
        if (this.number > 1)
            this.number--;
    }
}
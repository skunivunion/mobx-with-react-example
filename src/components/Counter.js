import React, { Component } from 'react';
// import { decorate, observable, action } from 'mobx';
// inject 함수는 mobx-react 에 있는 함수로서, 컴포넌트에서 스토어에 접근할 수 있게 해준다.
// 정확히는, 스토어에 있는 값을 컴포넌트의 props 로 "주입" 해준다
import { observer, inject } from 'mobx-react';

// inject('스토어이름') 을 하시면
// 컴포넌트에서 해당 스토어를 props 로 전달받아서 사용 할 수 있다.
@inject('counter')
// // 스토어의 특정 값이나 함수만 넣어주고 싶다면...
// @inject(stores => ({
//     number: stores.counter.number,
//     increase: stores.counter.increase,
//     decrease: stores.counter.decrease,
// }))
@observer
class Counter extends Component {
    // @observable
    // number = 0;

    // @action
    // increase = () => {
    //     this.number++;
    // }

    // @action
    // decrease = () => {
    //     this.number--;
    // }

    render() {
        const { counter } = this.props;
        // // 스토어의 특정 값이나 함수만 넣어주고 싶다면...
        // const { number, increase, decrease } = this.props;
        return (
            <div>
                <h1>{counter.number}</h1>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
                {/* 스토어의 특정 값이나 함수만 넣어주고 싶다면...
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button> */}
            </div>
        );
    }
}

export default Counter; // @observer 데코레이션 사용

// decorate(Counter, {
//     number: observable,
//     increase: action,
//     decrease: action
// });

// observable 값이 변할 때 observer가 
// 컴포넌트의 forceUpdate 를 호출하게 함으로써 자동으로 변화가 화면에 반영
//export default observer(Counter);
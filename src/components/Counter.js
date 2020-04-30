import React, { Component } from 'react';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

class Counter extends Component {
    @observable
    number = 0;

    @action
    increase = () => {
        this.number++;
    }

    @action
    decrease = () => {
        this.number--;
    }

    render() {
        return (
            <div>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
            </div>
        )
    }
}

// decorate(Counter, {
//     number: observable,
//     increase: action,
//     decrease: action
// });

// observer가 observable 값이 변할 때
// 컴포넌트의 forceUpdate 를 호출하게 함으로써 자동으로 변화가 화면에 반영
export default observer(Counter);
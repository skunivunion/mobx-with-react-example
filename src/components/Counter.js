import React, { Component } from 'react';
// import { decorate, observable, action } from 'mobx';
// inject 함수는 mobx-react 에 있는 함수로서, 컴포넌트에서 스토어에 접근할 수 있게 해준다.
// 정확히는, 스토어에 있는 값을 컴포넌트의 props 로 "주입" 해준다
import { observer, inject } from 'mobx-react';

@inject('counter')  // counter 스토어를 props 로 전달받아서 사용
// observable 값(number)이 변할 때 
// observer가 컴포넌트(Counter)의 forceUpdate 를 호출 : render() 실행
// 자동으로 변화가 화면에 반영
@observer
class Counter extends Component {
    render() {
        const { counter } = this.props; // counter 스토어를 props 로 전달받아서 사용
        return (
            <div>
                <h1>{counter.number}</h1>
                {/* counter 스토어의 increase() 실행 */}
                <button onClick={counter.increase}>+1</button>
                {/* counter 스토어의 decrease() 실행 */}
                <button onClick={counter.decrease}>-1</button>
            </div>
        );
    }
}

export default Counter; // @observer 데코레이션 사용


// // 2.
// import React, { Component } from 'react';
// // inject 함수는 mobx-react 에 있는 함수로서, 컴포넌트에서 스토어에 접근할 수 있게 해준다.
// // 정확히는, 스토어에 있는 값을 컴포넌트의 props 로 "주입" 해준다
// import { observer, inject } from 'mobx-react';

// // 스토어의 특정 값이나 함수만 넣어주고 싶다면...
// @inject(stores => ({
//     number: stores.counter.number,
//     increase: stores.counter.increase,
//     decrease: stores.counter.decrease,
// }))
// // observable 값(number)이 변할 때 
// // observer가 컴포넌트(Counter)의 forceUpdate 를 호출 : render() 실행
// // 자동으로 변화가 화면에 반영
// @observer
// class Counter extends Component {
//     render() {
//         const {number, increase, decrease } = this.props;
//         return (
//             <div>
//                 <h1>{counter.number}</h1>
//                 <button onClick={increase}>+1</button>
//                 <button onClick={decrease}>-1</button>
//             </div>
//         );
//     }
// }

// export default Counter; // @observer 데코레이션 사용


// // 3.
// import React, { Component } from 'react';
// import { decorate, observable, action } from 'mobx';
// import { observer } from 'mobx-react';

// class Counter extends Component {
//     number = 0;

//     increase = () => {
//         this.number++;
//     }

//     decrease = () => {
//         this.number--;
//     }

// render() {
//         return (
//             <div>
//                 <h1>{this.number}</h1>
//                 {/* counter 스토어의 increase() 실행 */}
//                 <button onClick={this.increase}>+1</button>
//                 {/* counter 스토어의 decrease() 실행 */}
//                 <button onClick={this.decrease}>-1</button>
//             </div>
//         );
//     }
// }

// decorate(Counter, {
//     number: observable,
//     increase: action,
//     decrease: action
// });

// // observable 값이 변할 때 observer가 
// // 컴포넌트의 forceUpdate 를 호출하게 함으로써 자동으로 변화가 화면에 반영
// export default observer(Counter);
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// market 스토어의 total() 함수를 인젝트한다. 
@inject(({ market }) => ({ total: market.total }))
class TotalPrice extends Component {
  render() {
    // total : market 스토어의 total() 함수
    const { total } = this.props;
    return (
      <div>
        <hr />
        <p>
          <b>총합: </b> {total}원 {/* total() 호출 */}
        </p>
      </div>
    );
  }
}

// market.total() 실행될 때 마다 호출되어 총합계를 다시 표시한다.
export default observer(TotalPrice);
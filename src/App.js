import React from 'react';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket';

// Counter Component와 SuperMarket Component 표시하기
function App() {
  return (
    <div>
      <Counter />
      <hr />
      <SuperMarket />
    </div>
  );
}

export default App;

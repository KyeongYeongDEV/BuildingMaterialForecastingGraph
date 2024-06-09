import React from 'react';
import './App.css';  

import MaterialSelector from './selectMaterial'; 
import Chart from "./showGraph";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>건축 재료 가격 그래프</h1>
        아래로 스크롤
      </header>
      <main>
        <MaterialSelector />  {/* MaterialSelector 컴포넌트를 여기에 렌더링 */}
        <Chart />
      </main>
    </div>
  );
}

export default App;

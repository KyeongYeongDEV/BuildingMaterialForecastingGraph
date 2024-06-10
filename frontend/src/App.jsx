import React from 'react';
import './App.css';  

import MaterialSelector from './selectMaterial'; 
import Chart from "./showGraph";


function App() {
  return (
    <div className="App">
      <main>
        <MaterialSelector />  {/* MaterialSelector 컴포넌트를 여기에 렌더링 */}
        <Chart />
      </main>
    </div>
  );
}

export default App;

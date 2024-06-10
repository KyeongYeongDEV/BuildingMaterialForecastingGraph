import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MaterialSelector() {
  const [selectedMaterial, setSelectedMaterial] = useState('');

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">건축 자재 가격 변동 그래프</h1>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="form-check mb-2">
              <input 
                className="form-check-input" 
                type="radio" 
                name="material" 
                id="wood" 
                value="wood" 
                checked={selectedMaterial === 'wood'} 
                onChange={handleMaterialChange} 
              />
              <label className="form-check-label" htmlFor="wood">
                목재
              </label>
            </div>

            <div className="form-check mb-2">
              <input 
                className="form-check-input" 
                type="radio" 
                name="material" 
                id="steel" 
                value="steel" 
                checked={selectedMaterial === 'steel'} 
                onChange={handleMaterialChange} 
              />
              <label className="form-check-label" htmlFor="steel">
                강철
              </label>
            </div>

            <div className="form-check mb-2">
              <input 
                className="form-check-input" 
                type="radio" 
                name="material" 
                id="concrete" 
                value="concrete" 
                checked={selectedMaterial === 'concrete'} 
                onChange={handleMaterialChange} 
              />
              <label className="form-check-label" htmlFor="concrete">
                콘크리트
              </label>
            </div>

            <div className="form-check mb-2">
              <input 
                className="form-check-input" 
                type="radio" 
                name="material" 
                id="brick" 
                value="brick" 
                checked={selectedMaterial === 'brick'} 
                onChange={handleMaterialChange} 
              />
              <label className="form-check-label" htmlFor="brick">
                벽돌
              </label>
            </div>

            <button 
              className="btn btn-primary mt-3" 
              onClick={() => alert(`선택한 재료: ${selectedMaterial}`)}
            >
              검색하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialSelector;

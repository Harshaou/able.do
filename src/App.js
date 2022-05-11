import { useState } from 'react';
import generateCombinations from './helperFunction';

function App() {
  const [jsonInput, setJsonInput] = useState(null);
  const [output, setOutput] = useState();

  const handleChange = () => {
    try {
      let inputData = JSON.parse(jsonInput);
      let result = generateCombinations(inputData.attributes);
      setOutput(result);
      console.log(result);
    } catch (error) {
      alert('Invalid JSON');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Generate Combinations</h1>
      <div className="contain">
        <div className="input-section">
          <textarea
            className="input-area"
            value={jsonInput || ''}
            onChange={(e) => setJsonInput(e.target.value)}
            rows="16"
          />
        </div>
        <div className="btn-section">
          <button onClick={handleChange}>Generate Combinations</button>
        </div>
        <div className="display-section">
          <h4>Result</h4>
          {output?.length > 0 &&
            output.map((arr, index) =>
              arr.map((item) => {
                return (
                  <div key={index}>
                    <p style={{ display: 'inline' }}>
                      {item.color}, {item.length}, {item.finish}
                    </p>
                  </div>
                );
              })
            )}
        </div>
      </div>
    </div>
  );
}

export default App;

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

  function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

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
          <h4>Result: {output?.length}</h4>
          {output?.length > 0 &&
            output.map((arr, index) => {
              let result = JSON.stringify(arr)
                .slice(1, -1)
                .replace(/[{}]/g, '')
                .replaceAll(',', '|')
                .replaceAll('"', ' ');
              return (
                <div>
                  <p
                    className="item"
                    key={index}
                    style={{
                      backgroundColor: getRandomColor(),
                    }}
                  >
                    {result}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;

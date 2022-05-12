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
      setOutput(null);
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

  let renderCombination = output?.length && jsonInput;

  return (
    <div className="container">
      <h1 className="title">Generate Combinations</h1>
      <div className="contain">
        <div className="input-section">
          <textarea
            placeholder="Paste your JSON here.."
            className="input-area"
            value={jsonInput || ''}
            rows={30}
            onChange={(e) => setJsonInput(e.target.value)}
          />
        </div>
        <div className="btn-section">
          <button onClick={handleChange}>Generate Combinations</button>
        </div>
        <div className="display-section">
          {renderCombination ? (
            <h4>Result: {output?.length}</h4>
          ) : (
            <h4 className="no-data">No data to display..</h4>
          )}
          {renderCombination &&
            output.map((arr, index) => {
              let result = JSON.stringify(arr)
                .slice(1, -1)
                .replace(/[{}]/g, '')
                .replaceAll(',', '|')
                .replaceAll('"', ' ');
              return (
                <div key={index}>
                  <p
                    className="item"
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

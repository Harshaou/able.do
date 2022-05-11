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
    } catch (error) {
      alert('Invalid JSON');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Generate Combinations</h1>
      <div className="contain">
        <textarea
          value={jsonInput || ''}
          onChange={(e) => setJsonInput(e.target.value)}
          rows="16"
          cols="70"
        />
        <button onClick={handleChange}>Generate Combinations</button>
        <div className="display">
          <h4>Result</h4>
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

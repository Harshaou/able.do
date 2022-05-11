import { useEffect } from 'react';
import data from './data.json';
import generateCombinations from './hook';

function App() {
  useEffect(() => {
    let result = generateCombinations(data.attributes);
    console.log(result);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Generate Combinations</h1>
      {/* <div className="contain">
        <textarea rows="16" cols="70" />
        <button>Generate Combinations</button>
        <div className="display">Result</div>
      </div> */}
    </div>
  );
}

export default App;

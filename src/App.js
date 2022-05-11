import data from './data.json';

function App() {
  const generateCombinations = () => {
    console.log(data);
  };

  generateCombinations();

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

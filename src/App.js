import './App.css';

function setname (name){
  return name
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
       <code>{props.name}</code>
        </p>
      </header>
    </div>
  );
}

export default App;

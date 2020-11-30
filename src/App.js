import logo from './logo.svg';
import './App.css';
import Squares from "./Components/Squares";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <Squares colour="hotpink" />
      <SignUp minimumLength={ 12 } />
    </div>
  );
}

export default App;

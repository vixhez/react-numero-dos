import logo from './logo.svg';
import './App.css';
import Squares from "./Components/Squares";
import SignUp from "./Components/SignUp";
import Button from "./Components/Button";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <Squares colour="hotpink" />
      <SignUp minimumLength={ 12 } />
      <Button handleUpdate={ (value) => console.log(value) } />
      <Form handleSubmit={ (value) => console.log(value) } />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Squares from "./Components/Squares";
import SignUp from "./Components/SignUp";
import Button from "./Components/Button";
import Form from "./Components/Form";
import Articles from "./News/Articles";
import Article from "./News/Article";
import Comments from "./News/Comments";
import CreateArticle from "./News/CreateArticle";


import ClickedHook from "./Hooks/ClickedHook";
import SquareHook from "./Hooks/SquareHook";
import ToggleTextHook from "./Hooks/ToggleTextHook";
import CounterHook from "./Hooks/CounterHook";
import StepCounterHook from "./Hooks/StepCounterHook";
import RollCallHook from "./Hooks/RollCallHook";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <div>
            <Squares colour="hotpink" />
            <SignUp minimumLength={ 12 } />
            <Button handleUpdate={ (value) => console.log(value) } />
            <Form handleSubmit={ (value) => console.log(value) } />
          </div>
        </Route>

        <Route exact path="/news">
          <Articles />
        </Route>

        <Route exact path="/news/create">
            <CreateArticle />
        </Route>

        <Route path="/news/:id" render={({ match }) => (
          <Article id={ match.params.id } />
        )} />
        //routes with id parameters must go at the end of the list or they will impact other routes after them!

        <Route exact path="/hooks">
          <div
            style={{padding: 100}}
            >
            <ClickedHook />
            <SquareHook colour="hotpink" />
            <ToggleTextHook initial="Hello" alternate="World" />
            <CounterHook initial={ 50 } max={ 100 } />
            <StepCounterHook max={ 100 } step={ 5 } />
            <RollCallHook names={ ['Penelope Jet', 'June August', 'Someone Somebody', 'Fred Orange'] } />
            </div>
          </Route>
       
        
      </Switch>
    </Router>
  );
}

export default App;

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

      </Switch>
    </Router>
  );
}

export default App;

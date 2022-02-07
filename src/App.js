import './App.css';
//components
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const URL ="https://portfoliolab.herokuapp.com/"
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects URL={URL} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

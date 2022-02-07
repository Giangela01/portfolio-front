import './App.css';
//components
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
      <ContactMe />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Steps } from "./Steps";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/steps">
          <Steps />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <>
      <p>Introduce la contraseña para acceder:</p>
      <input type="password" aria-label="password" />
    </>
  );
}

export default App;

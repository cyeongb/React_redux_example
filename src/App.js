import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./containers/HomePage";
import { UserPage } from "./containers/UserPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userId" component={UserPage} />
          <Route>404 Page Not Found !</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

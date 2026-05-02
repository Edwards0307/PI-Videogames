import "./App.css";
import { Home, Detail, Form, Landing } from "./views/index";
import { Route /* useLocation */ } from "react-router-dom";
/* import { NavBar } from "./components/index"; */

function App() {
  /* const location = useLocation(); */

  return (
    <div className="App">
      {/*       {location.pathname !== "/" && <NavBar />} */}

      <Route exact path="/" component={Landing} />

      <Route path="/Home" render={() => <Home />} />

      <Route path="/Detail/:id" component={Detail} />

      <Route path="/Form" render={() => <Form />} />
    </div>
  );
}

export default App;

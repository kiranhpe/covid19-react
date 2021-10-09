import "./App.scss";
import {Switch, Route, HashRouter } from "react-router-dom";

import { Header } from "./components/header/header";
import { Suspense,lazy } from "react";

const Vaccination = lazy(()=> import('./pages/vaccination/vaccination'));
const Home = lazy(() => import('./pages/home/home'));
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Suspense fallback={()=> {return <span>Loading....</span>}}> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/vaccination' component={Vaccination} />
          <Route path="*" component={Home}>
          </Route>
        </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;

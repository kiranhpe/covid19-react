import "./App.scss";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

import { Header } from "./components/header/header";
import { Suspense,lazy } from "react";

const Vaccination = lazy(()=> import('./pages/vaccination/vaccination'));
const Home = lazy(() => import('./pages/home/home'));
function App() {
  // axios.interceptors.request.use(function (config) {

  //   // spinning start to show
  //   // UPDATE: Add this code to show global loading indicator
  //   // document.body.classList.add('loading-indicator');

  //   // const token = window.localStorage.token;
  //   // if (token) {
  //   //    config.headers.Authorization = `token ${token}`
  //   // }
  //   console.log('request start')

  //   return config
  // }, function (error) {
  //   return Promise.reject(error);
  // });

  // axios.interceptors.response.use(function (response) {

  //   // spinning hide
  //   // UPDATE: Add this code to hide global loading indicator
  //  // document.body.classList.remove('loading-indicator');

  //   console.log('request done')
  //   return response;
  // }, function (error) {
  //   return Promise.reject(error);
  // });

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

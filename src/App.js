import axios from 'axios';
import './App.scss';
import { Header } from './components/header/header';
import Home from './pages/home/home';

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
      <Header/>
      <Home></Home>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./redux";
import {Provider} from "react-redux";
import './index.css';
import './assets/styles/main.css'
import 'react-toastify/dist/ReactToastify.css';
import Routes from "./components/Routes";



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes/>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


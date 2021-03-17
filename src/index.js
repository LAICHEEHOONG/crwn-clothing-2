import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

/*************************** from teacher ****************************** */
//git remote add origin https://github.com/LAICHEEHOONG/crwn-clothing-2.git
//git status
//git add -A
//git commit -m ""
//git push origin master

/*************************** from git hub ****************************** */
//create a new repository on the command line
// echo "# crwn-clothing-2" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/LAICHEEHOONG/crwn-clothing-2.git
// git push -u origin main

/*************************** from git hub ****************************** */
// git remote add origin https://github.com/LAICHEEHOONG/crwn-clothing-2.git
// git branch -M main
// git push -u origin main
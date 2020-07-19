import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

// const firebase = require("firebase/app");
// require("firebase/firestore"); 
import firebase from 'firebase'
require('firebase/firestore')


firebase.initializeApp({
  apiKey: "AIzaSyCSdYDL_kpQUq3n4KwvtHYMLdcYML3kc8c",
    authDomain: "react-chat-tutorial-f381c.firebaseapp.com",
    databaseURL: "https://react-chat-tutorial-f381c.firebaseio.com",
    projectId: "react-chat-tutorial-f381c",
    storageBucket: "react-chat-tutorial-f381c.appspot.com",
    messagingSenderId: "587455404029",
    appId: "1:587455404029:web:e6acf001e22efc531deb94",
    measurementId: "G-9LCXNQKZ3L"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route exact path='/' component={LoginComponent}></Route>
      <Route exact path='/signup' component={SignupComponent}></Route>
      <Route exact path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

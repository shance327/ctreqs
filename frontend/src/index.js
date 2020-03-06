import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import TestPage from "./Components/Pages/TestPage";
import * as serviceWorker from './serviceWorker';
import SearchBarPage from "./Components/Pages/SearchBarPage";

const routing = (
    <Router>
        <div className = "Navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to = "/TestPage">Test Page</Link>
                </li>
                <li>
                    <Link to ="/FrontPage">Front Page</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path= '/TestPage' component = {TestPage}/>
            <Route path= '/FrontPage' component = {SearchBarPage}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

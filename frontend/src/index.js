import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import TestPage from "./Components/TestPage";
import * as serviceWorker from './serviceWorker';

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
            </ul>
            <Route exact path="/" component={App} />
            <Route path= '/TestPage' component = {TestPage}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

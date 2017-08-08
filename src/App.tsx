// Import react libraries so we can create and bind our top level component (the app itself)
import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// Import child components (tabs)
import { HomeTab } from './HomeTab';
import { AboutTab } from './AboutTab';
import { ContactTab } from './Contact';

// Setup the bootstrapper for the app ready for react
const AppRouterBootstrap = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={HomeTab} />
            <Route path="/about" component={AboutTab} />
            <Route path="/contact" component={ContactTab} />
        </div>
    </Router>
);

// Bind up our main app into the root div
// The first argument in this function is the top level component we want to insert into out page, 
// the second argument is where we tell it where to insert this component. In this case, a simple document.getElementById is good enough, 
// the third argument is optional, this is a callback function when react has finished adding this component. So if you have something specific you
// only want to run after adding your component, you can do that here. 
ReactDOM.render(
    <AppRouterBootstrap />,
    document.getElementById("root"),
    () => {
        // This way of writing a function is a new "es2015" way to write functions. 
        // Doing "(arg1, arg2) => { SOME CODE HERE }" is exactly the same as writing "function (arg1, arg2) { SOME CODE HERE }" 
        // but in my opinion is cleaner as you don't end up with the word "function" all over the finished code :)
        console.log("App Ready!");
    }
);

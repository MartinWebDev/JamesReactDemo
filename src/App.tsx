// Import react libraries so we can create and bind our top level component (the app itself)
import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// Import child components
import { HelloWorld } from './HelloWorld';

const Home = () => (
    <HelloWorld name="James" />
);

const About = () => (
    <HelloWorld name="Martin" />
);

const Topic = ({ match }: any) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }: any) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
);

const AppRouterBootstrap = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Contact</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
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

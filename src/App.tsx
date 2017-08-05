// Import react libraries so we can create and bind our top level component (the app itself)
import * as React from "react";
import * as ReactDOM from "react-dom";

// Import child components
import { HelloWorld } from './HelloWorld';

// Bind up our main app into the root div
// The first argument in this function is the top level component we want to insert into out page, 
// the second argument is where we tell it where to insert this component. In this case, a simple document.getElementById is good enough, 
// the third argument is optional, this is a callback function when react has finished adding this component. So if you have something specific you
// only want to run after adding your component, you can do that here. 
ReactDOM.render(
    <HelloWorld name="James" />,
    document.getElementById("root"),
    () => {
        // This way of writing a function is a new "es2015" way to write functions. 
        // Doing "(arg1, arg2) => { SOME CODE HERE }" is exactly the same as writing "function (arg1, arg2) { SOME CODE HERE }" 
        // but in my opinion is cleaner as you don't end up with the word "function" all over the finished code :)
        console.log("App Ready!");
    }
);

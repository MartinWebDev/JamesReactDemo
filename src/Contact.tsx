// Import react libraries we need
import * as React from "react";

import {
    Route,
    Link,
    RouteComponentProps
} from 'react-router-dom';

import { ContactForm } from './Contact/Form';

interface IContactProps { }

export const ContactTab = ({ match }: RouteComponentProps<IContactProps>) => (
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

        <Route path={`${match.url}/:topicId`} component={ContactForm} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
);
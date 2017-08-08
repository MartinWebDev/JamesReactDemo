// Import react libraries we need
import * as React from "react";

import {
    RouteComponentProps
} from 'react-router-dom';

// Import styles
import styles from './Form.css';

interface ITopicProps { topicId: string }

export const ContactForm = ({ match }: RouteComponentProps<ITopicProps>) => (
    <div>
        <h3 className={styles.formHeader}>{match.params.topicId}</h3>
    </div>
);
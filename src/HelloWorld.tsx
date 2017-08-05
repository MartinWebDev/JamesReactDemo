// Import the react library so we can make a new component
import * as React from 'react';

interface IProps {
    name: string;
}

interface IState { }

export class HelloWorld extends React.Component<IProps, IState> {
    render(): JSX.Element {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

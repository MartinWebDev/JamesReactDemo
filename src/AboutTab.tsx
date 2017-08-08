// Import react libraries we need
import * as React from "react";

class Test extends React.Component<any, any> {
    render(): JSX.Element {

        return (
            <img src="assets/random.jpg" />
        );
    }
}

export const AboutTab = () => (
    <div>
        <Test />
    </div>
);

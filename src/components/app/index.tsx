import React, { createRef } from 'react';
import Input, { Ref } from 'components/input';

interface IProps {
    children: React.ReactNode
};

class App extends React.Component<IProps> {
    input = createRef<Ref>()
    
    render() {
        return (
            <React.Fragment>
                { this.props.children }
                <Input ref={ this.input }/>
            </React.Fragment>
        );
    }
}

export default App;
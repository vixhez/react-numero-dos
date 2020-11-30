import React from 'react';
import Square from './Square';

class Squares extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
        };
    }

    render() {
        let { selected } = this.state;

        return (
            <>
                <Square
                    selected={ selected === 1 }
                    handleClick={ () => this.setState({ selected: 1 }) }
                    colour={ this.props.colour }/>
                <Square
                    selected={ selected === 2 }
                    handleClick={ () => this.setState({ selected: 2 }) }
                    colour={ this.props.colour }/>
            </>
        );
    }
}

export default Squares;
import React from 'react';
// import { Button } from 'react-bootstrap';

class Button extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
        };

        // this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        const newValue = this.state.clicks + 1;
        this.setState({ clicks: this.state.clicks + 1 });
        this.props.handleUpdate(newValue);
    }
    
    render() {
        return (
        <button
            className="btn btn-primary"
            onClick={ this.handleClick }>
        Cliiiiick!
        </button>
        );
    }

}

export default Button;
import React from 'react';
import Password from './Password';

class SignUp extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            passwordInput: "",
            confirmInput: "",
        };

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
    }

    handleChangePassword(e) {
        console.log(e.currentTarget.value);
        const enteredPassword = e.currentTarget.value;
        this.setState({ passwordInput: enteredPassword });
       
       
        // enteredPassword.length > this.props.minimumLength

    }

    handleChangeConfirm(e) {
        const enteredConfirm = e.currentTarget.value;
        this.setState({ confirmInput: enteredConfirm });
    }

    render() {
        const { passwordInput, confirmInput } = this.state;
        
        const isValid = passwordInput === confirmInput && passwordInput.length >= this.props.minimumLength;
        console.log(isValid);

        return (
            <>
                <Password
                    label="Password"
                    isValid={ isValid }
                    handleChange={ this.handleChangePassword }
                    value={ this.state.passwordInput }
                />
                <Password
                    label="Confirm Password"
                    isValid={ isValid }
                    handleChange= { this.handleChangeConfirm }
                    value= { this.state.confirmInput }

                />
            </>
        );
    }
}

export default SignUp;
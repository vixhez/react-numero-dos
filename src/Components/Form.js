import React from "react";

class Form extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            info: {
                name: "",
                email: "",
            },
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    handleChangeName(e) {
        const enteredName = e.currentTarget.value;
        this.setState({ name: enteredName });
    } 

    handleChangeEmail(e) {
        const enteredEmail = e.currentTarget.value;
        this.setState({ email: enteredEmail });
    }

    clicked() {
        const { info } = this.state;

        this.props.handleSubmit(info);
        console.log(info);
    }

    render() {
        return (
            <>
                <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={ this.handleChangeName }
                        className="form-control"
                        id="name"
                        name="name"
                        type="text" />
                </div>

                <div class="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                        onChange={ this.handleChangeEmail }
                        className="form-control"
                        id="name"
                        name="name"
                        type="text" />
                </div>

                <button
                onClick={ this.clicked }
                className="btn btn-primary">
                    Submit
                </button>
            </>
        );
    }
}

export default Form;
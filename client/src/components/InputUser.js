import React, {Component} from "react";

class InputUser extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const username = this.state.value;

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({username})
            });

            window.location ="/"
        } catch (e) {
            console.error(e.message);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ім'я:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Надіслати" />
            </form>
        );
    }
}
export default InputUser;

import React, {PureComponent} from "react";

import User from "../User";
import "./style.css";

export default class ListUsers extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    //function for delete user
    deleteUser = async (id) => {
        try {
            await fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            });

            this.setState({
                users: this.state.users.filter(user => user.id !== id)
            });
        } catch (e) {
            console.error(e.message);
        }
    }

    async componentDidMount() {
        try {
            const result = await fetch('http://localhost:5000/users');
            const jsonData = await result.json();

            this.setState({users: jsonData});
        } catch (e) {
            console.error(e.message);
        }
    }

    render() {
        const {users} = this.state;

        return (
            <ul className='usersList__ul'>
                {users.map(user =>
                        <li key={user.id} style={{"marginBottom": "8px"}}>
                            <User user={user}
                                  onBtnDeleteUser={this.deleteUser.bind(this, user.id)}
                            />
                        </li>
                )}
            </ul>
        )

    }
}
import React, {Fragment, useEffect, useState} from "react";

import User from "../User";
import "./style.css";

const ListUsers = (props) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/users');
            const jsonData = await response.json();
            setUsers(jsonData);

            console.log(jsonData);
        } catch (e) {
            console.error(e.message)
        }
    }

    const deleteUser = async (id) => {
        try {
            await fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            });
            setUsers(users.filter(user => user.id !== id));
        } catch (e) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        const time = setTimeout(() => {
            getUsers();
        }, 1000);
        return () => clearTimeout(time);
    });

    return (
        <Fragment>
            <ul className='usersList__ul'>
                {
                    users.map(user => (
                        <li key={user.id} style={{"marginBottom": "8px"}}>
                            <User user={user} onButtonClick={() => deleteUser(user.id)}/>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    )
}
export default ListUsers;
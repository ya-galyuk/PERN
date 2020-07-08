import React, {Fragment, useEffect, useState} from 'react';
import "./App.css"

import InputUser from "./components/InputUser";
import ListUsers from "./components/ListUsers";

const App = () => {
    const [users, setUsers] = useState([]);

    //get all users from db
    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/users');
            const jsonData = await response.json();
            setUsers(jsonData);
        } catch (e) {
            console.error(e.message)
        }
    }

    //add new user
    const addUser = async (value) => {
        const username = value;
        try {
            await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({username})
            });
            await getUsers();
        } catch (e) {
            console.error(e.message);
        }
    }

    //delete user
    const deleteUser = async (id) => {
        try {
            await fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            });
            await getUsers();
        } catch (e) {
            console.error(e.message);
        }
    }

    //update user
    const editUser = async (username, id) => {
        try {
            if (username !== '') {
                await fetch(`http://localhost:5000/users/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({username})
                });
                await getUsers();
            }
        } catch (e) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Fragment>
            <div className="container">
                <InputUser addUser={addUser}/>
                <ListUsers
                    users={users}
                    getUsers={getUsers}
                    deleteUser={deleteUser}
                    editUser={editUser}/>
            </div>
        </Fragment>
    );
}

export default App;

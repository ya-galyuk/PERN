import React, {Fragment, useState} from "react";
import {Button, Input, Modal} from "antd";
import "./style.css";

const EditUser = ({user}) => {

    const [visible, setVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [newChange, setNewChange] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            if (username !== '') {
                await fetch(`http://localhost:5000/users/${user.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({username})
                });
            }
        } catch (e) {
            console.error(e.message);
        }

        setVisible(false);
        // window.location ="/"

    };

    const handleCancel = () => {
        setVisible(false);
        setUsername('');
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
        setNewChange(e.target.value !== '');
    }

    return (
        <Fragment>
            <Button type="primary" className="usersItem__btn-change" onClick={showModal}>Change</Button>
            <Modal
                title="Set new username !"
                visible={visible}
                onOk={handleEdit}
                onCancel={handleCancel}
                okButtonProps={{disabled: !newChange}}
            >
                <Input name="username" value={username} placeholder={user.userName}
                       onChange={handleChange}/>
            </Modal>
        </Fragment>
    );

}

export default EditUser;
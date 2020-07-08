import React, {Fragment, useState} from "react";
import {Button, Input, Modal} from "antd";
import "./style.css";

const EditUser = (props) => {

    const [visible, setVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [newChange, setNewChange] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        props.editUser(username, props.user.id);
        setVisible(false);
        setUsername('');
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
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{disabled: !newChange}}
            >
                <Input name="username" value={username} placeholder={props.user.userName}
                       onChange={handleChange}/>
            </Modal>
        </Fragment>
    );

}

export default EditUser;
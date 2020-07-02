import React, {Component, Fragment} from "react";
import {Button, Input, Modal} from "antd";

class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            username: '',
            newChange: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleEdit = async e => {
        if (this.state.username !== '') {
            e.preventDefault();
            try {
                const username = this.state.username;
                const response = await fetch(`http://localhost:5000/users/${this.props.user.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({username})
                });

                window.location ="/";
            } catch (e) {
                console.error(e.message);
            }
        }

        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
            username: '',
        });
    };

    handleChange = e => {
        this.setState({
            username: e.target.value,
            newChange: e.target.value !== '',
        });
    }

    render() {

        const {user} = this.props;

        return (
            <Fragment>
                <Button type="primary" onClick={this.showModal}>Edit</Button>
                <Modal
                    title="Set new username !"
                    visible={this.state.visible}
                    onOk={this.handleEdit}
                    onCancel={this.handleCancel}
                    okButtonProps={{ disabled: !this.state.newChange }}
                >
                    <Input name="username" value={this.state.username} placeholder={user.name} onChange={this.handleChange}/>
                </Modal>
            </Fragment>
        );
    }
}

export default EditUser;
import React, {Fragment, Component} from "react";
import {Row, Col, Button, Input, Modal} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

import "./style.css"

class InputUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            visible: false,
            newChange: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            newChange: event.target.value !== '',
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const username = this.state.value;

        try {
            await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({username})
            });

            window.location = "/";
        } catch (e) {
            console.error(e.message);
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
            value: '',
        });
    };

    render() {
        return (
            <Fragment>
                <Row>
                    <Col span={10}>
                        <h1 className="userInsertForm__h1">Name</h1>
                    </Col>
                    <Col span={9} offset={5}>
                        <Button htmlType="submit"
                                icon={<PlusOutlined style={{fontSize: '32px'}}/>}
                                onClick={this.showModal}
                                className="userInsertForm__btn"
                        />
                    </Col>
                </Row>

                <Modal
                    title="Add new username !"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                    okButtonProps={{disabled: !this.state.newChange}}
                >
                    <Input type="text" className="userInsertForm__input" value={this.state.value}
                           onChange={this.handleChange}/>
                </Modal>
            </Fragment>
        );
    }
}

export default InputUser;

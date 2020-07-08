import React, {Fragment, useState} from "react";
import {Row, Col, Button, Input, Modal} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

import "./style.css"

const InputUser = (props) => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [newChange, setNewChange] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
        setNewChange(event.target.value !== '');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = value;
        try {
            await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({username})
            });
        } catch (e) {
            console.error(e.message);
        }

        setVisible(false);
        setValue('');
        // window.location ="/"
    }

    const showModal = () => {
        setVisible(true);

    };

    const handleCancel = () => {
        setVisible(false);
        setValue('');
    };

    return (
        <Fragment>
            <Row>
                <Col span={10}>
                    <h1 className="userInsertForm__h1">Name</h1>
                </Col>
                <Col span={9} offset={5}>
                    <Button htmlType="submit"
                            icon={<PlusOutlined style={{fontSize: '32px'}}/>}
                            onClick={showModal}
                            className="userInsertForm__btn"
                    />
                </Col>
            </Row>

            <Modal
                title="Add new username !"
                visible={visible}
                onOk={handleSubmit}
                onCancel={handleCancel}
                okButtonProps={{disabled: !newChange}}
            >
                <Input type="text" className="userInsertForm__input" value={value}
                       onChange={handleChange}/>
            </Modal>
        </Fragment>
    );
}

export default InputUser;

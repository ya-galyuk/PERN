import React, {Fragment, Component} from "react";
import {Row, Col, Button, Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

import "./style.css"

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

            window.location = "/";
        } catch (e) {
            console.error(e.message);
        }
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} style={{"margin-bottom": "8px", "width": "300px"}}>
                    <Row>
                        <Col span={10}>
                            <h1 className="userInsertForm__h1">Name</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={15} offset={6}>
                            <Input type="text" className="userInsertForm__input" value={this.state.value} onChange={this.handleChange}/>
                        </Col>
                        <Col span={3}>
                            <Button htmlType="submit" icon={<PlusOutlined style={{fontSize: '22px'}}/>} className="userInsertForm__btn"/>
                        </Col>
                    </Row>
                </form>
            </Fragment>
        );
    }
}

export default InputUser;

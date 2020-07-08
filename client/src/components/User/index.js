import React, {Fragment} from "react";
import {Button, Row, Col} from 'antd';
import Icon from '@ant-design/icons';

import EditUser from "../EditUser";
import "./style.css"

const User = (props) => {

    const DeleteSvg = () => (
        <svg className="icon" height="24" width="24" x="0px" y="0px" viewBox="0 0 1024 1024"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M854.357 285.952l-34.66 663.552-.03.379c-2.548 28.499-26.76 50.838-55.115 50.838H289.707c-28.356 0-52.577-22.339-55.125-50.838l-.051-.757-34.619-663.174c-.583-11.298 8.084-20.917 19.371-21.51 11.298-.594 20.917 8.084 21.51 19.37l34.588 662.704c.798 7.102 7.419 13.273 14.326 13.273h474.845c6.897 0 13.518-6.171 14.316-13.262l34.608-662.714c.594-11.287 10.213-19.955 21.51-19.371 11.287.593 19.955 10.223 19.371 21.51zm81.834-144.235c0 11.307-9.158 20.466-20.466 20.466H649.85c-11.308 0-20.467-9.159-20.467-20.466V80.359c0-11.266-9.168-20.435-20.435-20.435H445.332c-11.277 0-20.446 9.169-20.446 20.435v61.358c0 11.307-9.159 20.466-20.466 20.466H138.544c-11.297 0-20.466-9.159-20.466-20.466 0-11.308 9.17-20.466 20.466-20.466h245.41V80.359c0-33.84 27.537-61.367 61.378-61.367h163.616c33.83 0 61.368 27.526 61.368 61.367v40.892h245.409c11.308 0 20.466 9.158 20.466 20.466zM639.637 305.333v572.663c0 11.297-9.169 20.466-20.466 20.466-11.308 0-20.466-9.169-20.466-20.466V305.333c0-11.307 9.158-20.466 20.466-20.466 11.297 0 20.466 9.159 20.466 20.466zm-184.072 0v572.663c0 11.297-9.159 20.466-20.466 20.466-11.298 0-20.467-9.169-20.467-20.466V305.333c0-11.307 9.17-20.466 20.467-20.466 11.307 0 20.466 9.159 20.466 20.466z"
                fill="rgb(248, 96, 96)"/>
        </svg>
    );
    const DeleteIcon = props => <Icon component={DeleteSvg} {...props} />;

    return (
        <Fragment>
            {
                props.users.map(user => (
                    <li key={user.id} style={{"marginBottom": "8px"}}>
                        <Row gutter={16} align="center">
                            <Col className="gutter-row" md={10}>
                                <p className="usersItem__p">{user.userName}</p>
                            </Col>
                            <Col className="gutter-row" md={5}>
                                <EditUser user={user} editUser={props.editUser}/>
                            </Col>
                            <Col className="gutter-row" md={9} style={{display: "flex", "alignItems": "center"}}>
                                <Button className="usersItem__btn-delete"
                                        onClick={() => props.deleteUser(user.id)}
                                        icon={<DeleteIcon/>} style={{padding: "0"}}/>
                            </Col>
                        </Row>
                    </li>
                ))
            }
        </Fragment>
    )
}

export default User

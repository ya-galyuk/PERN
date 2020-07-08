import React, {Fragment} from "react";

import User from "../User";
import "./style.css";

const ListUsers = (props) => {

    return (
        <Fragment>
            <ul className='usersList__ul'>
                <User users={props.users} deleteUser={props.deleteUser} editUser={props.editUser}/>
            </ul>
        </Fragment>
    )
}
export default ListUsers;
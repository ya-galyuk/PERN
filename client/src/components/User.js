import React, {PureComponent} from "react";

class User extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        const {user, onBtnUpdateUser, onBtnDeleteUser} = this.props;
        const body = <div style={{'width': '85px', display: 'inline-block'}}>{user.name}</div>

        return (
            <div>
                {body}
                <button onClick={onBtnUpdateUser}> update </button>
                <button onClick={onBtnDeleteUser}> delete </button>
            </div>
        )
    }
}
export default User

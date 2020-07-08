import React, {Fragment} from 'react';
import "./App.css"

import InputUser from "./components/InputUser";
import ListUsers from "./components/ListUsers";

const App = () => {
    return (
        <Fragment>
            <div className="container">
                <InputUser/>
                <ListUsers/>
            </div>
        </Fragment>
    );
}

export default App;

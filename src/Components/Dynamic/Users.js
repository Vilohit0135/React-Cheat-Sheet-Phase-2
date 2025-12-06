import React from "react";
import { Link } from "react-router-dom";

function Users(){
    return(
        <div>
            <h1>My Users</h1>
            <h2>
                <Link to={'/users'}>User1</Link>
            </h2>
            <h2>
                <Link to={'/users'}>User2</Link>
            </h2>
            <h2>
                <Link to={'/users'}>User3</Link>
            </h2>
        </div>
    )
};

export default Users;
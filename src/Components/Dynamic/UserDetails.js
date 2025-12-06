import React from "react";
import { useParams } from "react-router-dom";

function UserDetails(){
    const userId = useParams();
    const id = userId.id
    return(
        <div>
            <h1> User Detail....{id}</h1>
        </div>
    )
};

export default UserDetails;
import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import {Link} from "react-router-dom";

const User = ({user}) => {
    const{id, name, email} = user;
    return (
        <div>
            <Link to={id.toString()} state={user}>{id} {name} {email}</Link>
        </div>
    );
};

export default User;
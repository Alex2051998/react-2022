import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import {Link, useNavigate} from "react-router-dom";

const User = ({user}) => {
    const{id, name, email} = user;

    let navigators = useNavigate();
    return (
        <div>
            <Link to={id.toString()} state={user}>{id} {name} {email}</Link>
            <div>
                <button  onClick={() => navigators(`${id}/albums`)}>Albom</button>
            </div>

        </div>
    );
};

export default User;
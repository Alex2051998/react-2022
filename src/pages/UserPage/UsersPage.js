import React, {useEffect, useState} from 'react';
import User from "./User";
import {userService} from "../../services/userService";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])


    return (
        <div className={'wrapper'}>
            <div className={'blockRigth'}>
                {users.map(value => <User key={value.id} user={value}/>)}
            </div>
            <Outlet/>



        </div>
    );

};

export default UsersPage;
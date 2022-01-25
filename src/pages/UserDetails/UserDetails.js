import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {userService} from "../../services/userService";


const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    let navigator = useNavigate();


    const {state} = useLocation();

    console.log(state);


    useEffect((id) => {
        if(state){
            setUser(state)
            return
        }

        userService.getById(id).then(value => setUser({...value}))
    },[id])

    return (
        <div>
                {user && (
                    <div>
                        <div>Id: {user.id}</div>
                        <div>Name: {user.name}</div>
                        <div>Username: {user.username}</div>
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                        <div>Website: {user.website}</div>
                    </div>
                )}
                <button  onClick={() => navigator('posts')}>User Post</button>


                <Outlet/>


        </div>
    );
};

export default UserDetails;
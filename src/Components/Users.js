import React, {useEffect, useState} from 'react';

import User from "./User";
import UserDetails from "./UserDetails";
import {userServices} from "./UserService";
import UserPost from "./UserPost";

const Users = () => {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    let [posts, setPost] = useState([]);
    useEffect(() => {
            userServices.getAll()
            .then(value => setUsers(value))
    }, [])
    const getUserId = (id) => {
            userServices.getById(id)
            .then(value => setUser(value))
    }
    const getPostId = (id) => {
            userServices.getPostId(id)
                .then(value => setPost(value))
    }
    console.log(posts);
    return (
        <div>
            <div className={'wrap'}>
                <div>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
                <div>{user && <UserDetails key={user.id} user={user} getPostId={getPostId}/>}</div>
            </div>
            <div className={'center'}>
                <div>{posts.map(value => <UserPost key={value.id} id={value.id} title={value.title} body={value.body}/>)}</div>
            </div>


        </div>
    );
};

export default Users;
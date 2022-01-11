import React from 'react';

const User = (props) => {
    const {id, name, username, email, streat, city} = props;
    return (
        <div>
            <p></p>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Address: {streat}</div>
            <div>City: {city}</div>
        </div>
    );
};

export default User;
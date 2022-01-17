import React from 'react';

const User = (user) => {
    let {id, name, email} = user;
    return (
        <div>
            <div>{id} {name} {email}</div>
        </div>
    );
};

export default User;
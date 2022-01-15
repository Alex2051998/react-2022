import React from 'react';

const User = ({user:{id, name}, getUserId}) => {
    return (
        <div>
                <div>{id} {name}</div>
                <button onClick={() => getUserId(id)}>getId</button>
        </div>
    );
};

export default User;
// import React, {useEffect, useState} from 'react';

import User from "./User";

const Users = ({users}) => {
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => setUsers(value))
    // },[])
    return (
        <div>
            <div>
                {users.map(value => <User key={value.id} id={value.id} name={value.name} email={value.email}/>)}
            </div>
        </div>
    );
};

export default Users;
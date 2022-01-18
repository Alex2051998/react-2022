import User from "./User";

const Users = ({users}) => {

    return (
        <div>
            {users.map(value => <User key={value.key} id={value.id} name={value.name} email={value.email}/>)}
        </div>
    );
};

export default Users;
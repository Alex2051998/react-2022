import './App.css';

import Users from "./Components/Users";
import Form from "./Components/Form/Form";
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [filterUsers, setfilterUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {setUsers([...value])
                setfilterUsers([...value])
            })
    },[])

    const getFilter = (data) => {
      let filterArray = [...users]
        if(data.name){
            filterArray = filterArray.filter(users => users.name.toLowerCase().includes(data.name.toLowerCase()) )
        }
        if(data.email){
            filterArray = filterArray.filter(users => users.email.toLowerCase().includes(data.email.toLowerCase()) )
        }
        setfilterUsers(filterArray)
    }
    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filterUsers}/>
        </div>
    );
}

export default App;

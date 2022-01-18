import React, {useEffect, useState} from 'react';
import Form from "./Components/Form";
import Users from "./Components/Users";

const App = () => {
    const [users,setUsers] = useState([]);
    const [resusers,setResUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {setUsers(value)
                            setResUsers(value)})
    },[])
    const getFilter = (data) => {
      let filterArr = [...users];
      if(data.name){
        filterArr = filterArr.filter(users => (users.name.includes(data.name)))
      }
        if(data.email){
            filterArr = filterArr.filter(users => (users.email.includes(data.email)))
        }
        setResUsers(filterArr)
    }
    return (
        <div>
            <Form getfilter={getFilter}/>
            <Users users={resusers}/>
        </div>
    );
};

export default App;

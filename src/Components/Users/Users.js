import React, {useEffect, useState} from 'react';

import User from "../User/User";

const Users = () => {
    let [fligtsList, setFligtsList] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(flights => {
                setFligtsList(flights.filter(flights => flights.launch_year !== '2020'));

            });
    },[]);
    return (
        <div>
            {fligtsList.map(value => <User key={value.flight_number} mission={value.mission_name} launch={value.launch_year} img={value.links.mission_patch}/>)}
        </div>

    );
};

export default Users;
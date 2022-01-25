import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";
import {Outlet, useParams} from "react-router-dom";
import Album from "./Album";


const UserAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    console.log(id);

    useEffect(() => {
        userService.getByAlbum(id).then(value => setAlbums([...value]))
    },[id])

    return (
        <div>
            {albums.map(value => <Album key={value.id} item={value}/>)}
            <Outlet/>
        </div>
    );
};

export default UserAlbums;
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/userService";
import Album from "../UserAlbums/Album";
import Photo from "./Photo";

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const {id} = useParams();

    console.log(id);

    useEffect(() => {
        userService.getByFoto(id).then(value => setPhotos([...value]))
    },[id])
    return (
        <div>
            {photos.map(value => <Photo key={value.id} item={value}/>)}
        </div>
    );
};

export default Photos;
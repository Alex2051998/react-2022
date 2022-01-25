import React from 'react';
import {useNavigate} from "react-router-dom";

const Album = ({item}) => {
    let {userId, id, title} = item;
    let navigator = useNavigate();
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button onClick={() => navigator(`photos`)}>Photo</button>
        </div>
    );
};

export default Album;
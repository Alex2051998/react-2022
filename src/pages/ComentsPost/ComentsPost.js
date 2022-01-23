import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";
import PostComponent from "../PostComponent/PostComponent";
import PostComent from "../PostComent/PostComent";

const ComentsPost = () => {
    const [coment, setComent] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        postService.getPostComent(id).then(value => setComent(value));
    }, [])

    return (
        <div>
            {coment.map(value => <PostComent key={value.id} item={value}/>)}
        </div>
    );
};

export default ComentsPost;
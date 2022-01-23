import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import PostComponent from "../PostComponent/PostComponent";
import {useParams} from "react-router-dom";


const UserPost = () => {
    const [post, setPost] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        postService.getUserIdPost(id).then(value => setPost(value));
    }, [])
    return (
        <div>
            <div className={'blockLeft'}>
                {post.map(value => <PostComponent key={value.id} item={value}/>)}
            </div>

        </div>
    );
};

export default UserPost;
import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);

    let navigator = useNavigate();

    const {state} = useLocation();
    console.log(useLocation())
    useEffect((id) => {
        if(state){
            setPost(state)
            return
        }

        postService.getById(id).then(value => setPost({...value}))
    },[id])
    return (
        <div>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>UserId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
            <button  onClick={() => navigator('comments')}>Post comment</button>
            <Outlet/>
        </div>
    );
};

export default PostDetails;
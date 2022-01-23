import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import PostPage from "./PostPage";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div className={'wrapper'}>
            <div className={'blockRigth'}>
                {posts.map(value => <PostPage key={value.id} posts={value}/>)}
            </div>


            <Outlet/>
        </div>
    );
};

export default PostsPage;
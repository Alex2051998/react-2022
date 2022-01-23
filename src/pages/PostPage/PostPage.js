import React from 'react';
import {Link} from "react-router-dom";

const PostPage = ({posts}) => {
    let {id, title} = posts;
    return (
        <div>
            <Link to={id.toString()} state={posts}>Id: {id} Title: {title}</Link>
        </div>
    );
};

export default PostPage;
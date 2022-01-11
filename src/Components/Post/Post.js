import React from 'react';

const Post = (props) => {
    const {userId, id, title, body} = props;
    return (
        <div>
            <p></p>
            <div>UserId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;
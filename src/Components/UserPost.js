import React from 'react';

const UserPost = (props) => {
    let {id, title, body} = props;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Title: {body}</div>
        </div>
    );
};

export default UserPost;
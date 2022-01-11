import React from 'react';

const Coment = (props) => {
    const {postId, id, name, email, body} = props;
    return (
        <div>
            <p></p>
            <div>postId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Coment;
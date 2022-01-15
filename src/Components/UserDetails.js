import React from 'react';

const UserDetails = ({user:{id, name, username, email, address:{street, suite, city, zipcode, geo:{lat, lng}},phone, website}, getPostId}) => {
    return (
        <div>

                <div className={'userDetalisLeft'}>
                    <div>Id: {id}</div>
                    <div>Name: {name}</div>
                    <div>Username: {username}</div>
                    <div>Email: {email}</div>
                    <div>Street: {street}</div>
                    <div>Suite: {suite}</div>
                    <div>City: {city}</div>
                    <div>Zipcode: {zipcode}</div>
                    <div>Lat: {lat}</div>
                    <div>Lng: {lng}</div>
                    <div>Phone: {phone}</div>
                    <div>Website: {website}</div>
                </div>
                <div className={'userDetalisRigth'}>
                    <button onClick={() => getPostId(id)}>getPost</button>
                </div>


        </div>
    );
};

export default UserDetails;
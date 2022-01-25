import React from 'react';

const Photo = ({item}) => {
    let {id, albumId, title, url} = item;
    return (
        <div>
            <div className={'photo'}>
                <div className={'photoTitle'}>
                    Id: {id}
                    <div>AlbumId: {albumId}</div>
                    <div>Title: {title}</div>
                </div>

                <img src={url} alt=""/>
            </div>
        </div>
    );
};

export default Photo;
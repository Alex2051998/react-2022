import React from 'react';

const User = (props) => {
    let {mission, launch, img} = props;
    return (
            <div className={'fligts'}>
                <div className={'fligtsLeft'}>
                    <h2>{mission}</h2>
                    <p>{launch}</p>
                </div>
                <div className={'fligtsRight'}>
                    <img src={img} alt="mission_patch"/>
                </div>

            </div>
        );

};

export default User;
import React from 'react';
import Cat from "./Cat";
import Dog from "./Dog";

const Dogs = ({dogs}) => {
    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export default Dogs;
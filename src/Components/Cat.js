import React from 'react';

const Cat = ({cat:{id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={dispatch('DEL_CAT')}>Del</button>
        </div>
    );
};

export default Cat;
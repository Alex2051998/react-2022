import React from 'react';

const Cat = ({cat:{id, name}, dispatch}) => {
    return (
        <div>
            Cat: {name}
            <button onClick={() => dispatch({type:'DELL_CAT', payload:{id}})}>Dell</button>
        </div>
    );
};

export default Cat;
import React from 'react';

const Dog = ({dog:{id, name}, dispatch}) => {
    return (
        <div>
           Dog: {name}
            <button onClick={() => dispatch({type:'DELL_DOG', payload:{id}})}>Dell</button>
        </div>
    );
};

export default Dog;
import React from 'react';

const AddAction = ({addA:{id, name}, dispatch}) => {
    const dell = () => {
      dispatch({type:'DEL_ACTION', payload:{id}})
    }
    return (
        <div>
            <h2><input type="checkbox"/>{name} <button onClick={dell}>Dellete</button></h2>
        </div>
    );
};

export default AddAction;
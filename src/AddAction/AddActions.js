import React from 'react';
import AddAction from "./AddAction";

const AddActions = ({state:{addAction}, dispatch}) => {
    return (
        <div>
            {addAction.map(action => <AddAction key={action.id} addA={action} dispatch={dispatch}/>)}
        </div>
    );
};

export default AddActions;
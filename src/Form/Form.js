import React from 'react';


const Form = ({dispatch}) => {


    const form = (e) => {
      e.preventDefault();
      e.target.reset()
    }

    const addData = () => {
      dispatch({type:'ADD_ACTION', payload:{}})
    }
    return (
        <div>
           <form onSubmit={form}>
               <input type={'text'} placeholder={'addText'}/>
               <button onClick={addData}>Add</button>
           </form>
        </div>
    );
};

export default Form;
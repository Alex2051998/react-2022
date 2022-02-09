import React, {useRef} from 'react';


const Form = ({dispatch}) => {
    const AddInput = useRef();

    const form = (e) => {
      e.preventDefault();
      e.target.reset()
    }

    const addData = () => {
        dispatch({type:'ADD_ACTION', payload:{plus:AddInput.current.value}})
    }
    return (
        <div>
           <form onSubmit={form}>
               <input  type={'text'} placeholder={'add'} ref={AddInput}/>
               <button onClick={addData}>Add</button>
           </form>
        </div>
    );
};

export default Form;



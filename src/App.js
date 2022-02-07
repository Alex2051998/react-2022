import React, {useReducer} from 'react';

import Form from "./components/Form/Form";
import Dogs from "./components/Animals/Dogs";
import Cats from "./components/Animals/Cats";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return{...state, cats:[...state.cats, {id:new Date().getTime(), name:action.payload.cat}]}
        case 'ADD_DOG':
            return {...state, dogs:[...state.dogs, {id:new Date().getTime(), name:action.payload.dog}]}
        case 'DELL_CAT':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case 'DELL_DOG':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
        default:
            return state
    }

}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
    return (
        <div>
            <Form dispatch={dispatch}/>
            <div className={'CatAndDog'}>
                <Cats cats={state} dispatch={dispatch}/>
                <Dogs dogs={state} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default App;

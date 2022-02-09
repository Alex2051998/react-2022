import './App.css';
import {useReducer} from "react";
import Form from "./Components/Form";
import Cats from "./Components/Cats";
import Dogs from "./Components/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case 'ADD_DOG':
            return {...state, dogs: [{id: new Date().getTime(), name: action.payload.dog}]}
        case 'DELL_CAT':
            return {...state, cats: [...state.cats.filter(state.cats.id !== id)]}
        default:
            return state

    }
}

function App() {
    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div>
            <Form dispatch={dispatch}/>
            <Cats cats={cats} dispatch={dispatch}/>
            <Dogs dogs={dogs}/>
        </div>
    );
}

export default App;

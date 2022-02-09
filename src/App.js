import './App.css';
import Form from "./Form/Form";
import AddActions from "./AddAction/AddActions";
import {useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ACTION':
            return {...state, addAction: [...state.addAction, {id: new Date().getTime(), name: action.payload.plus}]}
        case 'DEL_ACTION':
            return {...state, addAction: state.addAction.filter(add => add.id !== action.payload.id)}
        default:
           return  state
    }
}

function App() {
    
 const [state, dispatch] = useReducer(reducer, {addAction:[]})
    
    
    return (
        <div className={'center'}>
            <Form dispatch={dispatch}/>
            <hr/>
            <AddActions state={state} dispatch={dispatch}/>
        </div>
    );
}

export default App;

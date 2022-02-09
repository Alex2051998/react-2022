import './App.css';
import Form from "./Form/Form";
import AddAction from "./AddAction/AddAction";
import {useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ACTION':
            return {...state, addAction: [...state.addAction, {id: new Date().getTime(), name: action.payload.adAction}]}
        case 'DEL_ACTION':
            return {...state}
    }
}

function App() {
    
 const [state, dispatch] = useReducer(reducer, {addAction:[]})
    
    
    return (
        <div>
            <Form dispatch-={dispatch}/>
            <AddAction/>
        </div>
    );
}

export default App;

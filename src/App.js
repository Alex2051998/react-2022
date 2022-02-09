import './App.css';
import Form from "./Form/Form";
import AddAction from "./AddAction/AddAction";
import {useReducer} from "react";

function App() {
 [state, dispatch] = useReducer(reducer, addAction:{})

    return (
        <div>
            <Form/>
            <AddAction/>
        </div>
    );
}

export default App;

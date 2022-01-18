import React, {useState} from 'react';

const Form = ({getfilter}) => {
    const [renUser, setRenUser] = useState({name: '', email: ''})
    const rename = (e) => {
        let userRen = {...renUser, [e.target.name]: e.target.value};
        setRenUser({...renUser, userRen})
        getfilter(userRen);
    }

    return (
        <div>
            <form>
                Name:
                <input type={'text'} name={'name'}  onChange={rename}/>
                Email:
                <input type={'text'} name={'email'} onChange={rename}/>
            </form>

        </div>
    );
};

export default Form;
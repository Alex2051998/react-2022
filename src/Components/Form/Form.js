import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', email: ''});
    const formRenewal = (e) => {
        const renewal = {...form, [e.target.name]: e.target.value};
        setForm({...form, renewal})
        getFilter(renewal)
    }
    return (
        <div>
            <form>
                <label>Name
                    <div>
                        <input type={'text'} name={'name'}  onChange={formRenewal}/>
                    </div>
                </label>
                <label>Emai
                    <div>
                        <input type={"text"} name={'email'}  onChange={formRenewal}/>
                    </div>
                </label>
            </form>
        </div>
    );
};

export default Form;
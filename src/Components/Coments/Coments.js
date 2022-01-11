import React, {useEffect, useState} from 'react';
import Coment from "../Coment/Coment";

const Coments = () => {
    const [coments, setComents] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComents(value))
    }, [])
    return (
        <div>
                <div className={'doun'}>
                    {coments.map(value => <Coment key={value.id} postId={value.postId} id={value.id} name={value.name} email={value.email} body={value.body}/>)}
                </div>
        </div>
    );
};

export default Coments;
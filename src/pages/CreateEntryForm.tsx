// import { Form } from "react-router-dom"
// import HeaderBackBtn from "../components/HeaderBackBtn"

// const CreateEntryForm = () => {
//     return (
//         <>
//             <HeaderBackBtn />

//             <div className="form">
//                 <Form action="/create" method="post">
//                     <input className="input" type="text" name="entry" placeholder="What's on your mind..." />
//                     <button className="btn">Add a New Journal Entry</button>
//                 </Form>
//             </div>
//         </>
//     )
// }

// export default CreateEntryForm

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../components/HeaderBackBtn';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CreateAction } from '../actions';

interface FormDataWrapper {
    get: (key: string) => string;
}

interface CreateActionParams {
    request: {
        formData: () => FormDataWrapper;
    };
}

const CreateEntryForm: React.FC = () => {
    const [entry, setEntry] = useState<string>('');
    const navigate = useNavigate();

    const handleChange: (content: string, delta: any, source: any, editor: any) => void = (value) => {
        setEntry(value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await CreateAction({
            request: { formData: () => ({ get: (key: string) => entry }) },
        });
        navigate('/');
    };

    return (
        <>
            <HeaderBackBtn />

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <Quill
                        modules={{ toolbar: true }}
                        theme="snow"
                        className="input"
                        value={entry}
                        onChange={handleChange}
                        placeholder="What's on your mind..."
                    />
                    <button className="btn" type="submit">
                        Add a New Journal Entry
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateEntryForm;

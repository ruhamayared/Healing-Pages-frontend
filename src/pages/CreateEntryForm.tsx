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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBackBtn from "../components/HeaderBackBtn";
import SimpleMDEEditor from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"; // import the required styles

const CreateEntryForm = () => {
    const [entryContent, setEntryContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Send request to backend
        await fetch("/create", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ entry: entryContent }),
        });

        // Redirect back to Index page
        navigate("/");
    };

    return (
        <>
            <HeaderBackBtn />

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <SimpleMDEEditor
                        value={entryContent}
                        onChange={(value) => setEntryContent(value)}
                        options={{ placeholder: "What's on your mind..." }}
                    />
                    <button className="btn">Add a New Journal Entry</button>
                </form>
            </div>
        </>
    );
};

export default CreateEntryForm;

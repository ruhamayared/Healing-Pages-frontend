import { Form } from "react-router-dom"

const CreateEntryForm = () => {
    return (
        <>
            <div className="create-form">
                <Form action="/create" method="post">
                    <input className="add-input" type="text" name="entry" placeholder="What's on your mind?" />
                    <button className="add-btn">Add a New Entry</button>
                </Form>
            </div>
        </>
    )
}

export default CreateEntryForm

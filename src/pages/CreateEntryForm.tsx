import { Form } from "react-router-dom"
import HeaderBackBtn from "../components/HeaderBackBtn"

const CreateEntryForm = () => {
    return (
        <>
            <HeaderBackBtn />

            <div className="form">
                <Form action="/create" method="post">
                    <input className="input" type="text" name="entry" placeholder="What's on your mind..." />
                    <button className="btn">Add a New Journal Entry</button>
                </Form>
            </div>
        </>
    )
}

export default CreateEntryForm

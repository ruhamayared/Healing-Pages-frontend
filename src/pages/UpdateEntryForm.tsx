import { Form, Link, useLoaderData } from "react-router-dom"
import { EntryModel } from "../components/Entry"
import HeaderBackBtn from "../components/HeaderBackBtn"


const UpdateEntryForm = () => {
    const entry = useLoaderData() as EntryModel
    console.log(entry)


    return (
        <>
            <HeaderBackBtn />

            <h2>Update your journal entry.</h2>
            <div className="form">
                <Form action={`/update/${entry.ID}`} method="post">
                    <input className="input"
                        type="text"
                        name="entry"
                        defaultValue={entry.entry}
                    />
                    <button className="btn">Update Journal Entry</button>
                </Form>
            </div>


        </>
    )
}

export default UpdateEntryForm

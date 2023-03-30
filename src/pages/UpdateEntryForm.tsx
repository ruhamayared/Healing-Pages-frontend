import { useState } from "react"
import { Form, useLoaderData, useNavigate } from "react-router-dom"
import { EntryModel } from "../components/Entry"
import HeaderBackBtn from "../components/HeaderBackBtn"
import Quill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { UpdateAction } from "../actions"

const UpdateEntryForm = () => {
    // Load the entry data from the route's data loader
    const entry = useLoaderData() as EntryModel
    // Declare state variable to store the updated entry content
    const [updatedEntry, setUpdatedEntry] = useState<string>(entry.entry)
    // Create a navigate function to navigate between routes
    const navigate = useNavigate()

    // Handle changes in the Quill editor and update the updatedEntry state
    const handleChange = (content: string) => {
        setUpdatedEntry(content)
    }

    // Handle form submission and update the journal entry
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        // Send the updated entry to your UpdateAction
        await UpdateAction({
            request: { formData: () => ({ get: (key: string) => updatedEntry }) },
            params: { id: entry.ID },
        })

        // Navigate to the index page after updating the entry
        navigate("/")
    }


    return (
        <>
            <HeaderBackBtn />

            <h2>Update your journal entry.</h2>
            <div className="form">
                <Form className="create-form" onSubmit={handleSubmit}>
                    <Quill
                        modules={{ toolbar: true }}
                        theme="snow"
                        className="input"
                        value={updatedEntry}
                        onChange={handleChange}
                    />
                    <button className="add-btn">Update Journal Entry</button>
                </Form>
            </div>
        </>
    )
}

export default UpdateEntryForm

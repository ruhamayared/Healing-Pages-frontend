import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderBackBtn from '../components/HeaderBackBtn'
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { CreateAction } from '../actions'

// Define the CreateEntryForm component
const CreateEntryForm: React.FC = () => {
    // Declare state variable to store the entry content
    const [entry, setEntry] = useState<string>('')
    // Create a navigate function to navigate between routes
    const navigate = useNavigate()

    // Handle changes in the Quill editor and update the entry state
    const handleChange: (content: string, delta: any, source: any, editor: any) => void = (value) => {
        setEntry(value)
    }

    // Handle form submission and create a new journal entry
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        await CreateAction({
            request: { formData: () => ({ get: (key: string) => entry }) },
        })
        // Navigate to the index page after creating the entry
        navigate('/')
    }

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

export default CreateEntryForm

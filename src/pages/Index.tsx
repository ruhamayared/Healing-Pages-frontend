import Entry, { EntryModel } from "../components/Entry"
import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"

const Index = () => {
    const entries = useLoaderData() as EntryModel[]

    // For each Entry in the array render an Entry component
    return (
        <>
            <h2>Create a New Journal Entry</h2>
            <Form action="/create" method="post">
                <input type="text" name="entry" placeholder="What's on your mind?" />
                <button>Add a New Entry</button>
            </Form>
            {entries.map((entry: EntryModel) => (
                <Entry entryData={entry} key={entry.ID} />
            ))}
        </>
    )
}

export default Index
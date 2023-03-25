import { Link, useLoaderData, Form } from "react-router-dom"
import { EntryModel } from "../components/Entry"

// Destructuring the props needed to get our post, including router prop match
const Show = () => {
    const entry = useLoaderData() as EntryModel

    return (
        <div>
            <small>Created at: {new Date(entry.CreatedAt).toLocaleString()}
            </small>
            <h1>{entry.entry}</h1>

            <h2>Update your Journal Entry</h2>
            <Form action={`/update/${entry.ID}`} method="post">
                <input
                    type="text"
                    name="entry"
                    defaultValue={entry.entry}
                />
                <button>Update Journal Entry</button>
            </Form>

            <Form action={`/delete/${entry.ID}`} method="post">
                <button>Delete Journal Entry</button>
            </Form>

            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Show
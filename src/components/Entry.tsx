import { Link } from "react-router-dom"


// Define the Entry model as a TypeScript interface, which mirrors the Go Entry struct
export interface EntryModel {
    id: number
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
    entry: string
}

// Define the props for the Entry component, which includes an entryData object of type EntryModel.
interface EntryProps {
    entryData: EntryModel
}

// The Entry component accepts an entryData prop and displays the entry's content and creation date.
function Entry({ entryData }: EntryProps) {

    return (
        <div>
            <Link to={`/entry/${entryData.id}`}>
                <h1>{entryData.entry}</h1>
            </Link>
            <small>Created at: {new Date(entryData.createdAt).toLocaleString()}</small>
        </div>
    )
}

export default Entry

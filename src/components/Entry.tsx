import { Link } from "react-router-dom"

// Define the Entry model as a TypeScript interface, which mirrors the Go Entry struct.
export interface EntryModel {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt?: Date
    entry: string
}

// Define the props for the Entry component, which includes an entryData object of type EntryModel.
interface EntryProps {
    entryData: EntryModel
}

// The Entry component accepts an entryData prop and displays the entry's content and creation date.
function Entry({ entryData }: EntryProps) {
    const entryPreview = entryData.entry.split(' ').slice(0, 30).join(' ')

    return (
        <div className="entry">
            <small className="entry-date">{new Date(entryData.CreatedAt).toLocaleDateString()}</small>
            <Link to={`/entry/${entryData.ID}`}>
                <p className="entry-content">{entryPreview}</p>
            </Link>

        </div>
    )

}

export default Entry

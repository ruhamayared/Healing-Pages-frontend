import Entry, { EntryModel } from "../components/Entry"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const Index = () => {
    const entries = useLoaderData() as EntryModel[]

    // Check if entries is an array; if not, set it to an empty array
    const validEntries = Array.isArray(entries) ? entries : [];

    // For each Entry in the array render an Entry component
    return (
        <>
            <Header />
            <div className="new-entry-btn-container">
                <Link to="/newentry" className="new-entry-btn">Write a New Entry</Link>
            </div>

            <h2>My Journal Entries</h2>
            <div className="entries">
                {validEntries.sort((a: any, b: any) => b.ID - a.ID).map((entry: EntryModel) => (
                    <Entry entryData={entry} key={entry.ID} />
                ))}
            </div>

        </>
    )
}

export default Index

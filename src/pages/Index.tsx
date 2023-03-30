import Entry, { EntryModel } from "../components/Entry"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const Index = () => {
    const entries = useLoaderData() as EntryModel[]

    // For each Entry in the array render an Entry component
    return (
        <>
            <Header />
            <div className="new-entry-btn-container">
                <Link to="/newentry" className="new-entry-btn">Write a New Entry</Link>
            </div>
            <div className="entries-container">
                <h2>My Journal Entries</h2>
                <div className="entries">
                    {entries.sort((a: any, b: any) => b.ID - a.ID).map((entry: EntryModel) => (
                        <Entry entryData={entry} key={entry.ID} />
                    ))}
                </div>
            </div>



        </>
    )
}

export default Index
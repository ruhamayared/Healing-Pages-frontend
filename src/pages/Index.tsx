import Entry, { EntryModel } from "../components/Entry"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

const Index = () => {
    const entries = useLoaderData() as EntryModel[]

    // For each Entry in the array render an Entry component
    return (
        <>
            {entries.map((entry: EntryModel) => (
                <Entry entryData={entry} key={entry.ID} />
            ))}

            <Link to="/newentry">Write a New Entry</Link>


        </>
    )
}

export default Index
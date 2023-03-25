import Entry, { EntryModel } from "../components/Entry";
import { useLoaderData } from "react-router-dom"

const Index = (props: any) => {
    const entries = useLoaderData() as EntryModel[]
    console.log(entries)

    // For each Entry in the array render an Entry component
    return (
        <>
            {entries.map((entry: EntryModel) => (
                <Entry entryData={entry} key={entry.id} />
            ))}
        </>
    )
}

export default Index
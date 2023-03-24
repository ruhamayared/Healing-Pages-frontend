import React from 'react'

// Define the Entry model as a TypeScript interface, which mirrors the Go Entry struct
interface EntryModel {
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
const Entry: React.FC<EntryProps> = ({ entryData }) => {
    return (
        <div>
            <h1>Entry</h1>
            <p>{entryData.entry}</p>
            <small>Created at: {new Date(entryData.createdAt).toLocaleString()}</small>
        </div>
    );
};

export default Entry
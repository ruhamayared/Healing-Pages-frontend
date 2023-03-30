import { Link, useLoaderData, Form } from "react-router-dom"
import { EntryModel } from "../components/Entry"
import HeaderBackBtn from "../components/HeaderBackBtn"

const Show = () => {
    const entry = useLoaderData() as EntryModel

    return (
        <>
            <HeaderBackBtn />


            <div className="content">
                <div>
                    <div style={{ display: "flex", marginBottom: "1rem" }}>
                        <small>Created at: {new Date(entry.CreatedAt).toLocaleString()}</small>
                        {/* Check if the entry has been updated and display the updated timestamp */}
                        {Math.floor(new Date(entry.CreatedAt).getTime() / 1000) !== Math.floor(new Date(entry.UpdatedAt).getTime() / 1000) && (
                            <small style={{ marginLeft: "8px", marginRight: "8px" }}>|</small>
                        )}
                        {Math.floor(new Date(entry.CreatedAt).getTime() / 1000) !== Math.floor(new Date(entry.UpdatedAt).getTime() / 1000) && (
                            <small>
                                Updated at: {new Date(entry.UpdatedAt).toLocaleString()}
                            </small>
                        )}
                    </div>

                    <div
                        dangerouslySetInnerHTML={{ __html: entry.entry }}
                    />

                    <div className="btn-container">
                        <Link to={`/updateentry/${entry.ID}`} className="btn">Update this Entry</Link>

                        <Form action={`/delete/${entry.ID}`} method="post">
                            <button className="btn">Delete this Entry</button>
                        </Form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Show
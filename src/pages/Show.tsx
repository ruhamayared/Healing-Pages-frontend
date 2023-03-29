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
                    <small>Created at: {new Date(entry.CreatedAt).toLocaleString()}
                    </small>
                    <div
                        dangerouslySetInnerHTML={{ __html: entry.entry }}
                    />

                    <div className="btn-container">
                        <Link to={`/updateentry/${entry.ID}`} className="btn">Update this Entry</Link>

                        <Form action={`/delete/${entry.ID}`} method="post">
                            <button className="btn">Delete Journal Entry</button>
                        </Form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Show
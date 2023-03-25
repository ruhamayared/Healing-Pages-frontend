import { redirect } from "react-router-dom"

const URL = "https://healing-pages.onrender.com/entries"

// Create
export async function CreateAction({ request }: any) {
    //Get form data
    const formData = await request.formData()

    // Construct new data
    const newEntry = {
        entry: formData.get("entry")
    }

    // Send request to backend
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
    })

    // Redirect back to Index page
    return redirect("/")
}

// Update
export async function UpdateAction({ request, params }: any) {
    // Get form data
    const formData = await request.formData()

    // Update data
    const updatedEntry = {
        entry: formData.get("entry")
    }

    // Send request to backend
    await fetch(URL + "/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEntry),
    })

    // Redirect back to Index page
    return redirect("/")
}

// Delete
export async function DeleteAction({ params }: any) {
    // Send request to backend
    await fetch(URL + "/" + params.id, {
        method: "delete",
    })

    // Redirect back to Index page
    return redirect("/")
}
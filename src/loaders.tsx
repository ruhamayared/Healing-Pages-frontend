const URL = "https://healing-pages.onrender.com/entries"

//Get all entries for index route
export const indexLoader = async () => {
    const response = await fetch(URL)
    const entries = await response.json()
    return entries
}

//Get a single entry for Show route
export const showLoader = async ({ params }: any) => {
    const response = await fetch(URL + `/entrys/${params.id}/`)
    const entry = await response.json()
    return entry
}
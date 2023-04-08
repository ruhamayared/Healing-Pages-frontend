import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom"
import App from "./App"
import { indexLoader, showLoader } from "./loaders"
import { CreateAction, UpdateAction, DeleteAction } from "./actions"
import Index from "./pages/Index"
import Show from "./pages/Show"
import CreateEntryForm from "./pages/CreateEntryForm"
import UpdateEntryForm from "./pages/UpdateEntryForm"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App />}>
            <Route path="" element={<Index />} loader={indexLoader} />
            <Route path="entry/:id" element={<Show />} loader={showLoader} />
            <Route path="create" action={CreateAction} />
            <Route path="/newentry" element={<CreateEntryForm />} />
            <Route path="/updateentry/:id" element={<UpdateEntryForm />} loader={showLoader} />
            <Route path="update/:id" action={UpdateAction} />
            <Route path="delete/:id" action={DeleteAction} />
        </Route>
    </>
))

export default router
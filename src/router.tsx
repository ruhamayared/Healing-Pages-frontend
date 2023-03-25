import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom"
import App from "./App"
import { indexLoader, showLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App />}>
            <Route path="" element={<Index />} loader={indexLoader} />
            <Route path="entry/:id" element={<Show />} loader={showLoader} />
            <Route path="create" />
            <Route path="update/:id" />
            <Route path="delete/:id" />
        </Route>
    </>
))

export default router
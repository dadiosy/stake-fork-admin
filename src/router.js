import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./routes/Layout";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
        ],
    },
]);

export default router
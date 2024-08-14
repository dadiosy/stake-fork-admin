import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./routes/Layout";
import ErrorPage from "./error-page";
import UserData from "./routes/user/UserData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'user/user-data',
                element: <UserData />
            }
        ],
    },
]);

export default router
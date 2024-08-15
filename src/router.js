import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./routes/Layout";
import ErrorPage from "./error-page";
import UserData from "./routes/user/UserData";
import Dashboard from "./routes/dashboard";
import LoginPage from "./routes/auth/login";

const router = createBrowserRouter([
    {
        path: '/auth/login',
        element: <LoginPage />
    },
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: 'user/user-data',
                element: <UserData />
            }
        ],
    },
]);

export default router
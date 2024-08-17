import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./routes/Layout";
import ErrorPage from "./error-page";
import UserData from "./routes/user/UserData";
import Dashboard from "./routes/dashboard";
import LoginPage from "./routes/auth/login";
import Register from "./routes/auth/register";
import LoginLogs from "./routes/logs/login-logs";

const router = createBrowserRouter([
    {
        path: '/auth/login',
        element: <LoginPage />
    },
    {
        path: '/auth/register',
        element: <Register />
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
            },
            {
                path: 'logs/login-logs',
                element: <LoginLogs />
            },
        ],
    },
]);

export default router
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./routes/Layout";
import ErrorPage from "./error-page";
import UserData from "./routes/user/UserData";
import WithdrawHistory from "./routes/user/WithdrawHistory";
import DepositHistory from "./routes/user/DepositHistory";
import ManualDeposit from "./routes/user/ManualDeposit";
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
            { path: '/home/dashboard', element: <Dashboard /> },
            { path: 'user/user-data', element: <UserData /> },
            { path: 'user/withdraw-history', element: <WithdrawHistory /> },
            { path: 'user/deposit-history', element: <DepositHistory /> },
            { path: 'user/manual-deposit', element: <ManualDeposit /> },
            { path: 'logs/login-logs', element: <LoginLogs /> },
        ],
    },
]);

export default router
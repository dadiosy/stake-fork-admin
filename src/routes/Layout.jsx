import { useEffect } from "react";
import Header from "../components/layout/Header";
import MainContainer from "../components/layout/MainContainer";
import SideMenu from "../components/layout/SideMenu";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/dashboard');
        }
    }, [location.pathname]);
    return (
        <div className="">
            <SideMenu />
            <Header />
            <MainContainer />
        </div>
    )
}
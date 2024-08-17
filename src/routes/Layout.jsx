import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import MainContainer from "../components/layout/MainContainer";
import SideMenu from "../components/layout/SideMenu";
import { useNavigate, useLocation } from 'react-router-dom';
import { MENU_WIDTH } from "../constant";

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation()
    const [menuWidth, setMenuWidth] = useState(MENU_WIDTH)
    const [collapsed, setCollapsed] = useState(true)

    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/dashboard');
        }
    }, [location.pathname]);

    useEffect(() => {
        if (collapsed) {
            setMenuWidth(0)
        } else {
            setMenuWidth(MENU_WIDTH)
        }
    }, [collapsed])

    return (
        <div className="">
            <SideMenu menuWidth={menuWidth} />
            <Header onCollapseChange={handleCollapse} collapsed={collapsed} paddingLeft={menuWidth} />
            <MainContainer paddingLeft={menuWidth} />
        </div>
    )
}
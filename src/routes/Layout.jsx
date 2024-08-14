import Header from "../components/layout/Header";
import MainContainer from "../components/layout/MainContainer";
import SideMenu from "../components/layout/SideMenu";

export default function Layout() {
    return (
        <div className="">
            <SideMenu />
            <Header />
            <MainContainer />
        </div>
    )
}
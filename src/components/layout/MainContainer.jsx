import { Outlet } from "react-router-dom";

export default function MainContainer() {
    return (
        <div className="pt-[60px]">
            <div className="p-[16px] bg-gray-300">
                <div className="bg-white p-[16px] rounded-[4px]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
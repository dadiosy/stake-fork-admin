import { Button } from "antd";

export default function Header() {
    return (
        <div className="fixed h-[60px] pl-[256px] shadow-sm w-full flex items-center justify-end">
            <Button shape="round mr-[8px]" type="primary">Login</Button>
            <Button shape="round mr-[8px]" type="primary">Register</Button>
        </div>
    )
}
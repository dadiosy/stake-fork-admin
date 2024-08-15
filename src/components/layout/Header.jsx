import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="fixed h-[60px] pl-[256px] shadow-md w-full flex items-center justify-end bg-white z-[9998]">
            <Button shape="round mr-[8px]" type="primary"><Link to="/auth/login">登录</Link></Button>
            <Button shape="round mr-[8px]" type="default"><Link to="/auth/register">注册</Link></Button>
        </div>
    )
}
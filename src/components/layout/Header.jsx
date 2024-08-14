import { Button } from "antd";

export default function Header() {
    return (
        <div className="fixed h-[60px] pl-[256px] shadow-sm w-full flex items-center justify-end">
            <Button shape="round mr-[8px]" type="primary">登录</Button>
            <Button shape="round mr-[8px]" type="default">注册</Button>
        </div>
    )
}
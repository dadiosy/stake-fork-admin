import { Button } from "antd";
import { Link } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export default function Header({ collapsed = false, onCollapseChange = f => f }) {
    const handleClickCollapse = () => {
        onCollapseChange()
    }

    return (
        <div className="fixed h-[60px] shadow-md w-full flex items-center justify-between bg-white z-[9998]">
            <Button type="dashed" shape="round" className="ml-[8px]" onClick={handleClickCollapse}>
                {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </Button>
            <div>
                <Button shape="round mr-[8px]" type="primary"><Link to="/auth/login">登录</Link></Button>
                <Button shape="round mr-[8px]" type="default"><Link to="/auth/register">注册</Link></Button>
            </div>
        </div>
    )
}
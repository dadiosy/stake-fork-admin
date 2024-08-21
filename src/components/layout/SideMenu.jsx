import {
    UserOutlined,
    ClockCircleOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MENU_WIDTH } from '../../constant';

export default function SideMenu({ menuWidth = MENU_WIDTH, collapsed = false }) {
    const navigate = useNavigate()
    const items = [
        {
            key: 'home',
            label: '主页',
            icon: <HomeOutlined />,
            children: [
                { key: 'dashboard', label: '仪表板' },
            ]
        },
        {
            key: 'user',
            label: '用户管理',
            icon: <UserOutlined />,
            children: [
                { key: 'user-data', label: '用户管理' },
                { key: 'withdraw-history', label: '提现记录' },
                { key: 'deposit-history', label: '充值记录' }
            ],
        },
        {
            key: 'logs',
            label: '日记管理',
            icon: <ClockCircleOutlined />,
            children: [
                { key: 'login-logs', label: '登录日记' },
            ],
        },
    ];

    const onClick = (e) => {
        const path = e.keyPath.reverse().join('/')
        navigate(path)
    }
    return (
        <div className="fixed h-dvh top-[60px] bg-menu-back overflow-auto z-[9999] transition-all" style={{ width: menuWidth }}>
            <Menu
                className='pt-[10px] z-[9998]'
                theme='dark'
                onClick={onClick}
                style={{ width: 256 }}
                mode="inline"
                items={items}
            />
        </div>
    )
}
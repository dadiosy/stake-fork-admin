import {
    AppstoreOutlined,
    UserOutlined,
    HistoryOutlined,
    SettingOutlined,
    MoneyCollectOutlined,
    SecurityScanOutlined,
    ClockCircleOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MENU_WIDTH } from '../../constant';

export default function SideMenu({ menuWidth = MENU_WIDTH }) {
    const navigate = useNavigate()
    const items = [
        {
            key: 'home',
            label: '主页',
            icon: <HomeOutlined />,
            children: [
                {
                    key: 'dashboard',
                    label: '仪表板',
                },
            ]
        },
        {
            key: 'user',
            label: '用户管理',
            icon: <UserOutlined />,
            children: [
                {
                    key: 'user-data',
                    label: '用户管理',
                },
                {
                    key: 'register-data',
                    label: '注册管理',
                },
                {
                    key: 'login-data',
                    label: '登入管理',
                },
            ],
        },
        {
            key: 'history-data',
            label: '历史数据管理',
            icon: <HistoryOutlined />,
            children: [
                {
                    key: 'topup_detail',
                    label: '充值历史数据',
                },
                {
                    key: 'cash_detail',
                    label: '提款明细数据',
                },
                {
                    key: 'tansaction_detail',
                    label: '交易明细数据',
                },
                {
                    key: 'bet_detail',
                    label: '投注明细数据',
                },
            ],
        },
        {
            key: 'bet',
            label: '投注管理',
            icon: <MoneyCollectOutlined />,
            children: [
                { key: '5', label: 'xx管理' },
                { key: '6', label: 'xx管理' },
                {
                    key: 'sub3',
                    label: '子菜单',
                    children: [
                        { key: '7', label: 'xx管理' },
                        { key: '8', label: 'xx管理' },
                    ],
                },
            ],
        },
        {
            key: 'game',
            label: '游戏管理',
            icon: <AppstoreOutlined />,
            children: [
                { key: '9', label: 'xx管理' },
                { key: '10', label: 'xx管理' },
                { key: '11', label: 'xx管理' },
                { key: '12', label: 'xx管理' },
            ],
        },
        {
            key: 'security',
            label: '安全管理',
            icon: <SecurityScanOutlined />,
            children: [
                { key: '13', label: 'xx管理' },
            ],
        },
        {
            key: 'proxy',
            label: '代理管理',
            icon: <SettingOutlined />,
            children: [
                { key: '14', label: 'xx管理' },
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
                className='pt-[10px]'
                theme='dark'
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    )
}
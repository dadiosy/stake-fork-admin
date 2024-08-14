import {
    AppstoreOutlined,
    UserOutlined,
    HistoryOutlined,
    SettingOutlined,
    MoneyCollectOutlined,
    SecurityScanOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function SideMenu() {
    const navigate = useNavigate()
    const items = [
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
                { key: '5', label: 'Option 5' },
                { key: '6', label: 'Option 6' },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        { key: '7', label: 'Option 7' },
                        { key: '8', label: 'Option 8' },
                    ],
                },
            ],
        },
        {
            key: 'game',
            label: '游戏管理',
            icon: <AppstoreOutlined />,
            children: [
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
                { key: '11', label: 'Option 11' },
                { key: '12', label: 'Option 12' },
            ],
        },
        {
            key: 'security',
            label: '安全管理',
            icon: <SecurityScanOutlined />,
            children: [
                { key: '13', label: 'Option 13' },
            ],
        },
        {
            key: 'proxy',
            label: '代理管理',
            icon: <SettingOutlined />,
            children: [
                { key: '14', label: 'Option 9' },
            ],
        },
    ];

    const onClick = (e) => {
        const path = e.keyPath.reverse().join('/')
        navigate(path)
    }
    return (
        <div className="fixed w-[256px] h-[100vh] bg-menu-back overflow-auto">
            <div className='h-[60px] bg-main flex flex-col justify-center items-center fixed w-[256px] z-[100]'>
                <h3 className='text-h4 text-white'>后台管理系统</h3>
            </div>
            <Menu
                className='mt-[60px]'
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
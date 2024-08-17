import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import TotalSales from "./components/TotalSales";
import VisitAmount from "./components/VisitAmount";
import UserAmount from "./components/UserAmount";
import OperationEffect from "./components/OperationEffect";
import CenterChart from "./components/CenterChart";
import HotGames from "./components/HotGames";
import GameUsersPieChart from "./components/GameUsersPieChart";
import { Collapse } from 'antd';
import Overview from "./components/Overview";
import ChargeAndWithdraw from "./components/ChargeAndWithdraw";
import UserDataAnalysis from "./components/UserDataAnalysis";
import UserRetentionData from "./components/UserRetentionData";
import AgentDataAnalysis from "./components/AgentDataAnalysis";
import AgentRetention from "./components/AgentRetention";

export default function Dashboard() {
    const blocks = [
        {
            key: 'overview',
            label: <h6 className="text-h6">平台总览</h6>,
            children: <Overview />,
        },
        {
            key: 'charge_and_withdraw',
            label: <h6 className="text-h6">充提数据</h6>,
            children: <ChargeAndWithdraw />,
        },
        {
            key: 'user_data_analysis',
            label: <h6 className="text-h6">用户数据分析</h6>,
            children: <UserDataAnalysis />,
        },
        {
            key: 'user_retention_data',
            label: <h6 className="text-h6">用户留存数据</h6>,
            children: <UserRetentionData />,
        },
        {
            key: 'agent_data_analysis',
            label: <h6 className="text-h6">代理数据分析</h6>,
            children: <AgentDataAnalysis />,
        },
        {
            key: 'agent_retention',
            label: <h6 className="text-h6">代理留存</h6>,
            children: <AgentRetention />,
        },
        {
            key: 'game_data',
            label: <h6 className="text-h6">游戏数据</h6>,
            children: <p>text</p>,
        },
    ];

    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <Link to="/">首页</Link>,
                    },
                    {
                        title: '仪表板'
                    },
                ]}
                className="mb-[30px]"
            />
            <div className="flex flex-col gap-[24px]">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[24px]">
                    <TotalSales totalSales={126560} deltaBySameDay={-11} deltaBySameWeek={12} salesByDay={12423} />
                    <VisitAmount visitAmount={8846} visitByDay={1234} />
                    <UserAmount userAmount={4440} newUsers={120} />
                    <OperationEffect effectResult={78} />
                </div>
                <CenterChart />
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px]">
                    <HotGames />
                    <GameUsersPieChart />
                </div>
                <Collapse items={blocks} />;
            </div>
        </div>
    )
}
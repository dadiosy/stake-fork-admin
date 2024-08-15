import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import TotalSales from "./components/TotalSales";
import VisitAmount from "./components/VisitAmount";
import UserAmount from "./components/UserAmount";
import OperationEffect from "./components/OperationEffect";
import CenterChart from "./components/CenterChart";
import HotGames from "./components/HotGames";

export default function Dashboard() {
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
                    <HotGames />
                </div>

            </div>
        </div>
    )
}
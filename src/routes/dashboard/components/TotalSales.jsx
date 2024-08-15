import { Card } from "antd"
import FunctionLabel from "../../../components/common/FunctionLabel"

export default function TotalSales({ totalSales = 0, deltaBySameWeek = 0, deltaBySameDay = 0, salesByDay = 0 }) {
    return (
        <Card className="shadow-sm">
            <div>
                <p className="text-label">总营销额</p>
                <p className="text-h4">¥ {totalSales}</p>
                <FunctionLabel label="周同比" percent={12} up />
                <FunctionLabel label="日同比" percent={11} down />
                <hr className="my-[12px]" />
                <FunctionLabel label={`日销售额 ￥${salesByDay}`} />
            </div>
        </Card>
    )
}
import { Card, Progress } from "antd"
import FunctionLabel from "../../../components/common/FunctionLabel"

export default function OperationEffect({ effectResult = 0 }) {
    return (
        <Card className="shadow-sm">
            <div>
                <p className="text-label">运营活动效果</p>
                <p className="text-h4">{effectResult}%</p>
                <div className="h-[46px] flex flex-col justify-center">
                    <Progress percent={effectResult} />
                </div>
                <hr className="my-[12px]" />
                <div className="grid grid-cols-2 gap-[4px]">
                    <FunctionLabel label="周同比" percent={12} up />
                    <FunctionLabel label="日同比" percent={11} down />
                </div>
            </div>
        </Card>
    )
}
import { Card } from "antd"
import FunctionLabel from "../../../components/common/FunctionLabel"
import { Line, Area, Histogram, Tiny } from "@ant-design/plots"

export default function UserAmount({ userAmount = 0, newUsers = 0 }) {
    const data = [
        { day: '2024.8.16', value: 3 },
        { day: '2024.8.17', value: 4 },
        { day: '2024.8.18', value: 3 },
        { day: '2024.8.19', value: 5 },
        { day: '2024.8.20', value: 4 },
        { day: '2024.8.21', value: 6 },
        { day: '2024.8.22', value: 7 },
        { day: '2024.8.23', value: 9 },
        { day: '2024.8.24', value: 2 },
        { day: '2024.8.25', value: 8 },
        { day: '2024.8.26', value: 5 },
        { day: '2024.8.27', value: 2 },
        { day: '2024.8.28', value: 5 },
        { day: '2024.8.29', value: 7 },
        { day: '2024.8.30', value: 8 },
    ];

    const config = {
        data,
        height: 46,
        xField: 'day',
        yField: 'value',
        axis: false,
        style: {
            fill: '#00BFFF',
        },
    };
    return (
        <Card className="shadow-md">
            <div>
                <p className="text-label">用户数</p>
                <p className="text-h4">¥ {userAmount}</p>
                <div>
                    <Tiny.Column {...config} />
                </div>
                <hr className="my-[12px]" />
                <FunctionLabel label={`当天新注册 ${newUsers}`} />
            </div>
        </Card>
    )
}
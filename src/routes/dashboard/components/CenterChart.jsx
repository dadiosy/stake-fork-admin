import { Card, Tabs } from "antd";
import { Column } from '@ant-design/plots';

const BusineesSales = () => {
    const data = [
        { month: '1月', value: 900 },
        { month: '2月', value: 800 },
        { month: '3月', value: 1000 },
        { month: '4月', value: 1200 },
        { month: '5月', value: 1040 },
        { month: '6月', value: 905 },
        { month: '7月', value: 710 },
        { month: '8月', value: 600 },
        { month: '9月', value: 1200 },
        { month: '10月', value: 1000 },
        { month: '11月', value: 1100 },
        { month: '12月', value: 900 },
    ];
    const config = {
        data,
        xField: 'month',
        yField: 'value',
    };
    return <Column {...config} />;
}

const VisitAmount = () => {
    const data = [
        { month: '1月', value: 12000 },
        { month: '2月', value: 8000 },
        { month: '3月', value: 9000 },
        { month: '4月', value: 7000 },
        { month: '5月', value: 1040 },
        { month: '6月', value: 9050 },
        { month: '7月', value: 7100 },
        { month: '8月', value: 6000 },
        { month: '9月', value: 12000 },
        { month: '10月', value: 9000 },
        { month: '11月', value: 1100 },
        { month: '12月', value: 9000 },
    ];
    const config = {
        data,
        xField: 'month',
        yField: 'value',
    };
    return <Column {...config} />;
}

export default function CenterChart() {
    const items = [
        {
            key: '1',
            label: '营销额',
            children: <BusineesSales />,
        },
        {
            key: '2',
            label: '访问量',
            children: <VisitAmount />,
        },
    ];
    return (
        <Card>
            <Tabs defaultActiveKey="1" items={items} />
        </Card>
    )
}
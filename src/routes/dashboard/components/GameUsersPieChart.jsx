import { Card, Table } from "antd";
import { Pie } from '@ant-design/plots';

export default function GameUsersPieChart() {
    const config = {
        data: [
            { game: 'Limbo', value: 27 },
            { game: 'Mine', value: 25 },
            { game: 'Slide', value: 18 },
            { game: 'Dice', value: 15 },
            { game: 'Plinko', value: 10 },
            { game: 'other', value: 10 },
        ],
        angleField: 'value',
        colorField: 'game',
        innerRadius: 0.6,
        label: {
            text: 'value',
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
        annotations: [
            {
                type: 'text',
                style: {
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 40,
                    fontStyle: 'bold',
                },
            },
        ],
    };

    return (
        <Card className="shadow-md">
            <h6 className="text-h6">游戏用户数占比</h6>
            <hr className="my-[12px]" />
            <Pie {...config} />
        </Card>
    )
}
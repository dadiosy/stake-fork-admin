import { Card, Table } from "antd";

export default function HotGames() {
    const columns = [
        {
            title: '排名',
            dataIndex: 'ranking',
            key: 'ranking'
        },
        {
            title: '游戏名称',
            dataIndex: 'game',
            key: 'game'
        },
        {
            title: '用户数',
            dataIndex: 'gameUsers',
            key: 'gameUsers'
        },
        {
            title: '周涨幅',
            dataIndex: 'increament',
            key: 'increament'
        },
    ]

    const data = [
        {
            ranking: 1,
            game: 'Limbo',
            gameUsers: 1200,
            increament: '50%',
        },
        {
            ranking: 2,
            game: 'Mine',
            gameUsers: 1100,
            increament: '20%',
        },
        {
            ranking: 3,
            game: 'Slide',
            gameUsers: 1000,
            increament: '10%',
        },
        {
            ranking: 4,
            game: 'Dice',
            gameUsers: 900,
            increament: '30%',
        },
        {
            ranking: 5,
            game: 'Plinko',
            gameUsers: 800,
            increament: '20%',
        },
        {
            ranking: 6,
            game: 'Limbo',
            gameUsers: 700,
            increament: '50%',
        },
        {
            ranking: 7,
            game: 'Mine',
            gameUsers: 600,
            increament: '20%',
        },
        {
            ranking: 8,
            game: 'Slide',
            gameUsers: 500,
            increament: '10%',
        },
        {
            ranking: 9,
            game: 'Dice',
            gameUsers: 400,
            increament: '30%',
        },
        {
            ranking: 10,
            game: 'Plinko',
            gameUsers: 300,
            increament: '20%',
        },
    ]


    return (
        <Card className="shadow-md">
            <h6 className="text-h6">热门游戏</h6>
            <hr className="my-[12px]" />
            <Table
                columns={columns}
                dataSource={data}
                size="small"
            />
        </Card>
    )
}
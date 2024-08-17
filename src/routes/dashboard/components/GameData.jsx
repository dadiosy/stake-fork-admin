import DataCard from "../../../components/common/DataCard";

export default function GameData() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-[12px]">
            <DataCard title="下注玩家数" label="99999" type='yellow' />
            <DataCard title="总下注金额" label="$99999" type='yellow' />
            <DataCard title="总派奖金额" label="$99999" type='yellow' />
            <DataCard title="总盈亏" label="$99999" type='yellow' />
            <DataCard title="总下注局数" label="99999" type='yellow' />
            <DataCard title="原创游戏优势" label="99.99%" type='yellow' />
            <DataCard title="原创游戏盈亏" label="$99999.99" type='yellow' />
        </div>
    )
}
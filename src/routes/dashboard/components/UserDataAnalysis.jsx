import DataCard from "../../../components/common/DataCard";

export default function UserDataAnalysis() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-[12px]">
            <DataCard title="新增注册" label="99999" type='yellow' />
            <DataCard title="新增首充用户数" label="99999" type='yellow' />
            <DataCard title="新用户付费转换率" label="99.99%" type='yellow' />
            <DataCard title="复充用户数" label="99999" type='yellow' />
            <DataCard title="充值活跃用户数" label="99999" type='yellow' />
            <DataCard title="申请提现代理数" label="99999" type='yellow' />
            <DataCard title="申请提现玩家数" label="99999" type='yellow' />
            <DataCard title="提现成功用户数" label="99999" type='yellow' />
            <DataCard title="主动拉新玩家数" label="99999" type='yellow' />
            <DataCard title="拉新增长一级付费数" label="99999" type='yellow' />
        </div>
    )
}
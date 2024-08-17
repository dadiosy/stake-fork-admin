import DataCard from "../../../components/common/DataCard";

export default function Overview() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-[12px]">
            <DataCard title="平台余额" label="$99999.99" type='primary' />
            <DataCard title="平台总充值金额" label="$99999.99" type='primary' />
            <DataCard title="平台总提现金额" label="$99999.99" type='primary' />
            <DataCard title="平台总充提差" label="$99999.99" type='primary' />
            <DataCard title="平台总提现收费" label="$99999.99" type='primary' />
            <DataCard title="平台代理总提现" label="$99999.99" type='primary' />
            <DataCard title="彩金总金额" label="$99999.99" type='primary' />
            <DataCard title="平台总注册数" label="99999" type='primary' />
            <DataCard title="平台总充值人数" label="99999" type='primary' />
            <DataCard title="充提比" label="1:0.8" type='primary' />
            <DataCard title="平台总代理数" label="99999" type='primary' />
            <DataCard title="平台总复充人数" label="99999" type='primary' />
            <DataCard title="平台总活跃人数" label="99999" type='primary' />
            <DataCard title="平台总拉新玩家数" label="99999" type='primary' />
            <DataCard title="平台充值打码率" label="X15.8" type='primary' />
        </div>
    )
}
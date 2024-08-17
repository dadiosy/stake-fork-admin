import DataCard from "../../../components/common/DataCard";

export default function AgentDataAnalysis() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-[12px]">
            <DataCard title="活跃代理人数" label="99999" type='primary' />
            <DataCard title="新增代理人数" label="99999" type='primary' />
            <DataCard title="代理新增一级注册数" label="99999" type='primary' />
            <DataCard title="代理新增一级首充数" label="99999" type='primary' />
            <DataCard title="人均新增一级付费数" label="99999" type='primary' />
            <DataCard title="代理一级用户总充值" label="$99999.99" type='primary' />
            <DataCard title="代理一级用户总提款" label="$99999.99" type='primary' />
            <DataCard title="代理一级用户总充提差" label="$99999.99" type='primary' />
            <DataCard title="代理一级用户人均充值" label="$99999.99" type='primary' />
            <DataCard title="代理总佣金" label="$99999.99" type='primary' />
            <DataCard title="下级充值奖励总佣金" label="$99999.99" type='primary' />
            <DataCard title="代理等级奖励总佣金" label="$99999.99" type='primary' />
            <DataCard title="下级投注总佣金" label="$99999.99" type='primary' />
            <DataCard title="代理人工加金金额" label="$99999.99" type='primary' />
            <DataCard title="代理成功提现金额" label="$99999.99" type='primary' />
        </div>
    )
}
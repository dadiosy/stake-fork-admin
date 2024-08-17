import DataCard from "../../../components/common/DataCard";

export default function ChargeAndWithdraw() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-[12px]">
            <DataCard title="充值金额" label="$99999.99" type='success' />
            <DataCard title="首充金额" label="$99999.99" type='success' />
            <DataCard title="首充人数" label="$99999.99" type='success' />
            <DataCard title="复充金额" label="$99999.99" type='success' />
            <DataCard title="复充人数" label="$99999.99" type='success' />
            <DataCard title="人均首充金额" label="$99999.99" type='success' />
            <DataCard title="人均复充金额" label="$99999.99" type='success' />
            <DataCard title="提现总金额" label="$99999.99" type='success' />
            <DataCard title="代理提现金额" label="$99999.99" type='success' />
            <DataCard title="玩家提现金额" label="$99999.99" type='success' />
            <DataCard title="总充提差" label="$99999.99" type='success' />
            <DataCard title="玩家充提差" label="$99999.99" type='success' />
            <DataCard title="玩家人均提现" label="$99999.99" type='success' />
            <DataCard title="领取的彩金金额" label="$99999.99" type='success' />
            <DataCard title="新用户首日存款总金额" label="$99999.99" type='success' />
            <DataCard title="新用户首日人均存款金额" label="$99999.99" type='success' />
        </div>
    )
}
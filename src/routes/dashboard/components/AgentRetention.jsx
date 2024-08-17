import DataCard from "../../../components/common/DataCard";

export default function AgentRetention() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-[12px]">
            <DataCard title="近7日活跃代理数" label="99999" type='success' />
            <DataCard title="近30日六十代理数" label="99999" type='success' />
            <DataCard title="近30日流失代理率" label="99。99%" type='success' />
        </div>
    )
}
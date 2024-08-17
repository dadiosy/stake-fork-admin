import DataCard from "../../../components/common/DataCard";

export default function UserRetentionData() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-[12px]">
            <DataCard title="首充用户次留" label="99.99%" type='default' />
            <DataCard title="首充用户3留" label="99.99%" type='default' />
            <DataCard title="首充用户7留" label="99.99%" type='default' />
            <DataCard title="首充用户15留" label="99.99%" type='default' />
            <DataCard title="首充用户30留" label="99.99%" type='default' />
        </div>
    )
}
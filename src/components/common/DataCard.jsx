import { Card } from "antd";

export default function DataCard({ title = 'title', label = 'label', type = 'default' }) {
    const color = {
        default: 'bg-default text-default',
        primary: 'bg-primary text-white',
        success: 'bg-success text-white',
    }
    return (
        <Card title={<h6 className="text-p4 font-[600]">{title}</h6>} className={`${color[type]}`}>
            <p className="text-p1">{label}</p>
        </Card>
    )
}
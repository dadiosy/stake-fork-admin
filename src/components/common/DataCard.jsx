import { Card } from "antd";

export default function DataCard({ title = 'title', label = 'label', type = 'default' }) {
    const color = {
        default: 'bg-default',
        primary: 'bg-primary text-white',
        success: 'bg-success text-white',
        yellow: 'bg-yellow',
    }
    return (
        <Card title={<h6 className="text-p4 font-[600]">{title}</h6>} className={`${color[type]} shadow-md`}>
            <p className="text-p1">{label}</p>
        </Card>
    )
}
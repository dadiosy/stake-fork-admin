import { Input } from "antd"
export default function PriceRangePicker() {
	return (
		<div className="flex border border-slate-300 rounded-lg">
			<Input variant="borderless" />
			<span className="mt-1 mx-2">至</span>
			<Input variant="borderless" />
		</div>
	)
}
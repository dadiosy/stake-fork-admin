import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Space, Table, Form, Button, DatePicker } from "antd";
import { useState, useEffect } from "react";
import { manualDeposit } from "../../constant/manualDeposit";
import PriceRangePicker from "../../components/common/PriceRangePicker";
const { RangePicker } = DatePicker
export default function ManualDeposit() {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState()
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 20
		}
	})

	const columns = [
		{
			title: '时间',
			dataIndex: 'deposite_date',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '变动类型',
			dataIndex: 'deposite_type',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '操作人员',
			dataIndex: 'operate_user',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '订单金额',
			dataIndex: 'order_amount',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '需求打码量',
			dataIndex: 'required_coding_volume',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '备注',
			dataIndex: 'remark',
			className: 'text-xs sm:text-sm md:text-base'
		},
	]
	const fetchData = () => {
		setData(manualDeposit)
	}
	useEffect(() => {
		fetchData();
	}, [
		tableParams.pagination?.current,
		tableParams.pagination?.pageSize,
		tableParams?.sortOrder,
		tableParams?.sortField,
		JSON.stringify(tableParams.filters),
	]);
	const handleTableChange = (pagination, filters, sorter) => {
		setTableParams({
			pagination,
			filters,
			sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
			sortField: Array.isArray(sorter) ? undefined : sorter.field,
		});

		// `dataSource` is useless since `pageSize` changed
		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([]);
		}
	};
	return (
		<div className="p-5">
			<Space direction="vertical" size="large" className="w-full">
				<Filters />
				<div className="overflow-x-auto">
					<Table
						columns={columns}
						rowKey={(record) => record.id}
						dataSource={data}
						pagination={{
							current: tableParams.pagination.current,
							pageSize: tableParams.pagination.pageSize,
							showSizeChanger: true,
							pageSizeOptions: ['20', '50'],
						}} loading={loading}
						scroll={{ x: 'max-content' }}
						className="mt-4"
						size="small"
						onChange={handleTableChange}
					/>
				</div>

			</Space>

		</div>
	)
}
function Filters() {
	return (
		<div className="border border-gray-300 p-4 rounded">
			<div className="flex flex-wrap justify-between items-center gap-4">
				<div className="flex items-center">
					<Form
						labelCol={{ span: 10 }}
						wrapperCol={{ span: 14 }}
						layout="horizontal"
						initialValues={{ size: 'small' }}
						style={{ maxWidth: 600 }}
					>
						<div className="grid md:grid-cols-2">
							<div>
								<Form.Item label="选择时间">
									<RangePicker />
								</Form.Item>
							</div>
							<div>
								<Form.Item label="金额范围" layout="horizontal" >
									<PriceRangePicker />
								</Form.Item>
							</div>
						</div>

					</Form>
				</div>
				<div className="flex items-center space-x-2">
					<Button icon={<SearchOutlined />}>搜索</Button>
					<Button icon={<ReloadOutlined />}>重置</Button>
				</div>
			</div>
		</div>
	)
}
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Form, Select, Tag, DatePicker } from "antd";
import { useState, useEffect } from "react";
import { depositHistory } from "../../constant/depositHistory";
import PriceRangePicker from "../../components/common/PriceRangePicker";
const { RangePicker } = DatePicker

export default function DepositHistory() {
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
			title: '提交时间',
			dataIndex: 'submit_date',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '打款时间',
			dataIndex: 'deposit_date',
			className: 'text-xs sm:text-sm md:text-base text-center',
			render: (date) => date ? date : '-'
		}, {
			title: '平台单号',
			dataIndex: 'platform_id',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '渠道订单号',
			dataIndex: 'channel_order_number',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '充值金额',
			dataIndex: 'deposit_amount',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '赠金',
			dataIndex: 'bonus',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '订单状态',
			dataIndex: 'order_state',
			className: 'text-xs sm:text-sm md:text-base',
			render: state => {
				switch (state) {
					case 'unpaid': return <Tag bordered={false}>未支付</Tag>
					case 'done': return <Tag bordered={false} color="green">已完成</Tag>
					case 'pending': return <Tag bordered={false} color="grey">等待支付</Tag>
					case 'canceled': return <Tag bordered={false} color="red">已取消</Tag>
				}
			}
		}
	]
	const fetchData = () => {
		setData(depositHistory)
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
						rowKey={(record) => record.platform_id}
						dataSource={data}
						pagination={{
							current: tableParams.pagination.current,
							pageSize: tableParams.pagination.pageSize,
							showSizeChanger: true,
							pageSizeOptions: ['20', '50'],
						}}
						loading={loading}
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
								<Form.Item label="金额范围">
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
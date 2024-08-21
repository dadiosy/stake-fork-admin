import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, DatePicker, Select, Space, Table, Form, Tag } from "antd";
import { useState, useEffect } from "react";
import { withdrawHistory } from "../../constant/withdrawHistory";
import PriceRangePicker from "../../components/common/PriceRangePicker";
const { RangePicker } = DatePicker;

export default function WithdrawHistory() {
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
			sorter: true,
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '提现平台单号',
			dataIndex: 'withdraw_platform_id',
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '提现金额',
			dataIndex: 'withdraw_amount',
			sorter: true,
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '到账金额',
			dataIndex: 'arrival_amount',
			sorter: true,
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '手续费',
			dataIndex: 'fee',
			sorter: true,
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '免手续费',
			dataIndex: 'no_fee',
			sorter: true,
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '免手续费来源',
			dataIndex: 'no_fee_source',
			sorter: true,
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '操作后余额',
			dataIndex: 'remain_amount_after_withdraw',
			sorter: true,
			className: 'text-xs sm:text-sm md:text-base'
		}, {
			title: '订单状态',
			dataIndex: 'operation_state',
			className: 'text-xs sm:text-sm md:text-base',
			render: (state) => {
				switch (state) {
					case "pending": return <Tag bordered={false}>待审核</Tag>
					case "done": return <Tag bordered={false} color="green">已打款</Tag>
					case "doing": return <Tag bordered={false} color="lime">打款中</Tag>
					case "rejected": return <Tag bordered={false} color="red">已拒绝</Tag>
					case "canceled": return <Tag bordered={false} color="grey">取消订单</Tag>
					case "failed": return <Tag bordered={false} color="magenta">打款失败</Tag>
					default: return <Tag bordered={false}>待审核 </Tag>
				}
			}
		}, {
			title: '备注',
			dataIndex: 'remark',
			className: 'text-xs sm:text-sm md:text-base'
		}
	]
	const fetchData = () => {
		setData(withdrawHistory)
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
						rowKey={(record) => record.withdraw_platform_id}
						dataSource={data}
						loading={loading}
						scroll={{ x: 'max-content' }}
						className="mt-4"
						size="small"
						onChange={handleTableChange}
						pagination={{
							current: tableParams.pagination.current,
							pageSize: tableParams.pagination.pageSize,
							showSizeChanger: true,
							pageSizeOptions: ['20', '50'],
						}}
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
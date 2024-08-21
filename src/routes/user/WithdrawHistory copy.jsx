import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Select } from "antd";
import { Space, Table, Form } from "antd";
import { useState, useEffect } from "react";
import { userInfo } from "../../constant";

export default function WithdrawHistory() {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState()
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10
		}
	})

	const columns = [
		{
			title: '',
			dataIndex: '',
			sorter: true,
			className: 'text-xs sm:text-sm md:text-base'
		}
	]
	const fetchData = () => {
		setData(userInfo)
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
						pagination={tableParams.pagination}
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
						<div className="grid md:grid-cols-3">
							<div>
								<Form.Item label="客户账号">
									<Input />
								</Form.Item>
							</div>
							<div>
								<Form.Item label="客户账号">
									<Select>
										<Select.Option value="demo">Demo</Select.Option>
									</Select>
								</Form.Item>
							</div>
							<div>
								<Form.Item label="客户账号">
									<Select>
										<Select.Option value="demo">Demo</Select.Option>
									</Select>
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
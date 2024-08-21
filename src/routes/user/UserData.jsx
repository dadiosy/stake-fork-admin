import { useEffect, useState } from "react";
import { Button, Table, Space, DatePicker, Form, Input, Select } from "antd";
import { userInfo } from '../../constant/userInfo'
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";

export default function UserData() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 20,
        },
    });
    const columns = [
        {
            title: '用户昵称',
            dataIndex: 'display_name',
            sorter: true,
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: '用户账号',
            dataIndex: 'email',
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: '用户ID',
            dataIndex: 'account_id',
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: '用户类型',
            dataIndex: 'user_type',
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: 'VIP等级',
            dataIndex: 'vip_level',
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: '账号状态',
            dataIndex: 'account_state',
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: '禁止提现',
            dataIndex: 'withdraw_forbidden',
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: '冻结状态',
            dataIndex: 'suspended',
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: '用户标记',
            dataIndex: 'user_mark',
            className: "text-xs sm:text-sm md:text-base",
        }, {
            title: '注册时间',
            dataIndex: 'register_date',
            className: "text-xs sm:text-sm md:text-base",
            render: register_date => <div className="text-center">
                <div>{register_date.date}</div>
                <div>{register_date.time}</div>
            </div>

        }, {
            title: '操作',
            render: (_, { account_id }) => <div className="flex gap-x-2">
                <Button className="">详情</Button>
                <Button danger>提现封禁</Button>
                <Button type="primary">拉黑</Button>
            </div>
        }
    ];

    const getRandomuserParams = (params) => ({
        results: params.pagination?.pageSize,
        page: params.pagination?.current,
        ...params,
    });

    const fetchData = () => {
        // setLoading(true);
        // fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
        //     .then((res) => res.json())
        //     .then(({ results }) => {
        //         console.log(results)
        //         setData(results);
        //         setLoading(false);
        //         setTableParams({
        //             ...tableParams,
        //             pagination: {
        //                 ...tableParams.pagination,
        //                 total: 200,
        //                 // 200 is mock data, you should read it from server
        //                 // total: data.totalCount,
        //             },
        //         });
        //     });
        setData(userInfo)
    };

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
                        rowKey={(record) => record.account_id}
                        dataSource={data}
                        loading={loading}
                        onChange={handleTableChange}
                        scroll={{ x: 'max-content' }}
                        className="mt-4"
                        size="small"
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
                        <div className="grid md:grid-cols-3">
                            <div>
                                <Form.Item label="客户账号">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="邀请ID">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="手机号">
                                    <Input />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item label="客户昵称">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="客户标签">
                                    <Select>
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="CPF">
                                    <Input />
                                </Form.Item>
                            </div>
                            <div>

                                <Form.Item label="客户类型">
                                    <Select>
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="VIP等级">
                                    <Select>
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="银行卡号">
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="flex items-center space-x-2">
                    <Button icon={<SearchOutlined />}>
                        搜索
                    </Button>
                    <Button icon={<ReloadOutlined />}>重置</Button>
                </div>
            </div>
        </div>
    )
}
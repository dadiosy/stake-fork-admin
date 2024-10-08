import React, { useState } from "react";
import { Table, DatePicker, Button, Row, Col, Space } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const dataSource = [
    {
        key: '1',
        date: '2011-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
    {
        key: '2',
        date: '2012-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
    {
        key: '3',
        date: '2013-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
    {
        key: '4',
        date: '2014-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
    {
        key: '5',
        date: '2015-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
    {
        key: '6',
        date: '2016-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
    {
        key: '7',
        date: '2017-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
    {
        key: '8',
        date: '2018-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
    {
        key: '9',
        date: '2019-02-02 19:00:00',
        registerIp: '123.123.11.1',
        loginIp: '123.123.11.1',
        place: '巴西 圣保罗',
        loginPlatform: 'IOS',
        loginMachine: 'IPHONE14',
        machineNumber: 'XXXXXXXXXXX',
    },
];

const columns = [
    {
        title: '登录时间',
        dataIndex: 'date',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '注册IP',
        dataIndex: 'registerIp',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '登录IP',
        dataIndex: 'loginIp',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '归属地',
        dataIndex: 'place',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '登录平台',
        dataIndex: 'loginPlatform',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '登录设备',
        dataIndex: 'loginMachine',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '设备号',
        dataIndex: 'machineNumber',
        className: "text-xs sm:text-sm md:text-base",
    },
];

const LoginLogs = () => {

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 20,
    });

    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };

    return (
        <div className="p-5">
            <Space direction="vertical" size="large" className="w-full">
                {/* Search Panel with Border */}
                <div className="border border-gray-300 p-4 rounded">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center">
                            <span>选择时间:</span>
                            <RangePicker className="ml-2" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button icon={<ReloadOutlined />}>重置</Button>
                            <Button type="primary" icon={<SearchOutlined />}>
                                查询
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{
                            current: pagination.current,
                            pageSize: pagination.pageSize,
                            showSizeChanger: true,
                            pageSizeOptions: ['20', '50'],
                        }}
                        onChange={handleTableChange}
                        scroll={{ x: 'max-content' }}
                        className="mt-4"
                        size="small"
                        rowKey="key"
                    />
                </div>
            </Space>
        </div>
    );
};

export default LoginLogs;

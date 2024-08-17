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
        key: 'date',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '注册IP',
        dataIndex: 'registerIp',
        key: 'registerIp',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '登录IP',
        dataIndex: 'loginIp',
        key: 'loginIp',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '归属地',
        dataIndex: 'place',
        key: 'place',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '登录平台',
        dataIndex: 'loginPlatform',
        key: 'loginPlatform',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '登录设备',
        dataIndex: 'loginMachine',
        key: 'loginMachine',
        className: "text-xs sm:text-sm md:text-base",
    },
    {
        title: '设备号',
        dataIndex: 'machineNumber',
        key: 'machineNumber',
        className: "text-xs sm:text-sm md:text-base",
    },
];

const LoginLogs = () => {

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
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
                    <div className="flex items-center w-full">
                            <span className="mr-2">选择时间:</span>
                            <div className="flex-1 overflow-x-auto">
                                <RangePicker className="w-full sm:w-32 md:w-40 lg:w-48 xl:w-64" />
                            </div>
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
                            pageSizeOptions: ['5', '10', '20', '50'],
                        }}
                        onChange={handleTableChange}
                        scroll={{ x: 'max-content' }}
                        className="mt-4"
                        size="small"
                    />
                </div>
            </Space>
        </div>
    );
};

export default LoginLogs;

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
    },
    {
        title: '注册IP',
        dataIndex: 'registerIp',
        key: 'registerIp',
    },
    {
        title: '登录IP',
        dataIndex: 'loginIp',
        key: 'loginIp',
    },
    {
        title: '归属地',
        dataIndex: 'place',
        key: 'place',
    },
    {
        title: '登录平台',
        dataIndex: 'loginPlatform',
        key: 'loginPlatform',
    },
    {
        title: '登录设备',
        dataIndex: 'loginMachine',
        key: 'loginMachine',
    },
    {
        title: '设备号',
        dataIndex: 'machineNumber',
        key: 'machineNumber',
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
                    <Row gutter={16} align="middle" justify="space-between">
                        <Col>
                            <span>选择时间:</span>
                            <RangePicker className="ml-2" />
                        </Col>
                        <Col>
                            <Space>
                                <Button icon={<ReloadOutlined />}>重置</Button>
                                <Button type="primary" icon={<SearchOutlined />}>
                                    查询
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </div>

                {/* Table Panel */}
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
                    className="mt-4"
                />
            </Space>
        </div>
    );
};

export default LoginLogs;
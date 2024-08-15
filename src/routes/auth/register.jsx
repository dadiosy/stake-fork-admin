import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    Card
} from 'antd';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default function RegisterPage() {
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const onFinish = (values) => {
        navigate('/')
    };

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    return (
        <div className="h-screen bg-main-brighter flex flex-col justify-center items-center">
            <h5 className="text-h5 text-white mb-[20px]">后台管理系统注册</h5>
            <Card className='md:w-[400px] w-[90%] shadow-md'>
                <Form
                    layout='vertical'
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                    style={{ maxWidth: 600 }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[
                            {
                                type: 'email',
                                message: '请输入正确的邮箱格式!',
                            },
                            {
                                required: true,
                                message: '请输入您的邮箱!',
                            },
                        ]}
                    >
                        <Input size='large' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password size='large' />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认您的密码!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('密码确认失败!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password size='large' />
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label="匿名"
                        tooltip="您希望怎么称呼您?"
                        rules={[{ required: true, message: '请输入您的匿名!', whitespace: true }]}
                    >
                        <Input size='large' />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="性别"
                        rules={[{ required: true, message: '请选择性别!' }]}
                    >
                        <Select placeholder="请选择性别" size='large'>
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                            <Option value="other">其他</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" className='w-full' size='large'>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    );
};
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Card } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        navigate('/')
    };

    return (
        <div className="h-screen bg-main-brighter flex flex-col justify-center items-center">
            <h5 className="text-h5 text-white mb-[20px]">后台管理系统登录</h5>
            <Card className='md:w-[400px] w-[90%] shadow-md'>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    style={{ maxWidth: 360 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" size='large' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" size='large' />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住</Checkbox>
                            </Form.Item>
                            <Link to="/auth/reset-password">忘记密码</Link>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" size='large'>
                            登录
                        </Button>
                        <Link to="/auth/register" className='text-blue-500'>注册新账号</Link>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}
import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/button/style/css';
import './MyLoginMail.css';

const FormItem = Form.Item;
const Search = Input.Search;

class MyLoginMail extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };



    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='pswdInputContainer'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        <b> 注册邮件</b>
                        <Search
                            placeholder="请输入邮箱"
                            enterButton="发送"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </FormItem>

                    <FormItem>
                        <b> 邮件验证码</b>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div className="login-form-forgot">
                            未收到验证码？ <a href="">再次发送</a>
                        </div>

                    </FormItem>
                </Form>
            </div>
        );
    }
}


const Mail = Form.create()(MyLoginMail);

export default Mail;
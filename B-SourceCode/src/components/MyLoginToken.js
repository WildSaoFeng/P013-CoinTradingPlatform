import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/button/style/css';
import './MyLoginPswd.css';

const FormItem = Form.Item;

class MyLoginToken extends React.Component {
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
                        <b> 超级口令</b>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>

                </Form>
            </div>
        );
    }
}


const Token = Form.create()(MyLoginToken);

export default Token;
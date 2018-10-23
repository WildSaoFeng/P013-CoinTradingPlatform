import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/button/style/css';
import './MyLoginPswd.css';

const FormItem = Form.Item;

class MyLoginPswd extends React.Component {

    state = {
      box1: '',
      box2: '',
    };

    updateBoxAChange1(evt) {
        this.setState({box1: evt.target.value}, () => {
            this.props.transferMsg1(this.state.box1);
        });
    };


    updateBoxAChange2(evt) {
        this.setState({box2: evt.target.value}, () => {
            this.props.transferMsg2(this.state.box2);
        });
    };

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
                        <b> 用户名</b>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input onChange={evt => this.updateBoxAChange1(evt)} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        <b> 密码</b>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' },
                                // {maxLength: 8, message: '长度不够'}.
                                // {minType: 3, message: '大小写都要有'}

                            ],
                        })(
                            <Input onChange={evt => this.updateBoxAChange2(evt)} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div className="login-form-button">
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                        </div>

                        <div className="login-form-forgot">
                            <a className="login-form-forgot" href="">Forgot password</a>
                        </div>
                        <div className="login-form-forgot">
                            Or <a href="">Register Now!</a>
                        </div>

                    </FormItem>
                </Form>
            </div>
        );
    }
}


const Pswd = Form.create()(MyLoginPswd);

export default Pswd;
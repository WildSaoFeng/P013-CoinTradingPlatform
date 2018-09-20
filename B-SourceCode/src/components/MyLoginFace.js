import React from 'react';
import { Upload, Button, Icon, Alert } from 'antd';

import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/upload/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/alert/style/css';
import './MyLoginFace.css';

const fileList = [{
    uid: '-1',
    name: '示例文件1.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
    uid: '-2',
    name: '示例文件2.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
};

const props2 = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
};

class MyLoginFace extends React.Component {

    state = {
        showDis: false
    };

    showIc = () => {
        this.setState({
            showDis: true
        });
    };

    render() {
        return(
            <div className='pswdInputContainer'>
                { this.state.showDis && <Alert message="您的所有照片已上传成功，请点击 Submit 查看分析结果" type="success" showIcon />}
                <b>请放入照片</b>
                <br />
                <Upload  {...props2}>
                    <Button onClick={this.showIc}>
                        <Icon type="safety" /> 进行Ai验证
                    </Button>
                </Upload>
            </div>
        );
    }
}

export default MyLoginFace;
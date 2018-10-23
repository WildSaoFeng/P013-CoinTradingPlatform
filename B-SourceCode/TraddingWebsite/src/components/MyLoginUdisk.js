import React from 'react';
import { Upload, message, Button, Icon } from 'antd';

import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/upload/style/css';
import 'antd/lib/button/style/css';
import './MyLoginUdisk.css';


const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class MyLoginUdisk extends React.Component {
    render() {
        return(
            <div className='pswdInputContainer'>
                <b>请加载U盘文件</b>
                <br/>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                <br/>
                已加载文件：
            </div>
        );
    }
}

export default MyLoginUdisk;
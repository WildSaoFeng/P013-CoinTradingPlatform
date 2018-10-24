import React from 'react';
import { withRouter } from 'react-router-dom';
import { browserHistory, Route, Redirect } from 'react-router';

import MyAdmin from '../MyAdmin';
import MyAdmin2 from '../MyAdmin2';
import MyAdmin3 from '../MyAdmin3';
import { Modal, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import crypto from 'crypto';

import config from '../../config';
import 'antd/lib/modal/style/css';

class SSOPage extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  signCertificate(cert) {
    const key = config.key;
    const pt = cert;

    var encrypt = crypto.createCipheriv('des-ede3', key, "");
    var theCipher = encrypt.update(pt, 'utf8', 'base64');
    theCipher += encrypt.final('base64');

    return theCipher;
  }

  render() {
    const userCert = this.props.match.params.cert;

    const signedCert = this.signCertificate(userCert);

    axios({
      method: 'post',
      url:'/ssoback/'+signedCert
    }).then(res => {
      if(res.data.success) {
        console.log('AHAHAHHAHAHAHA!');
        Modal.success({
          title: '来自教务系统的 单点登录 验证成功！',
          content: '完成社团系统注册完毕，身份验证成功！'
        });
        alert("Yes!");
        this.context.router.history.push('/');
      } else {
        Modal.error({
          title: '单点登录 验证失败！',
          content: '证书/签名不正确，请重新检查'
        });
      }
    });

    return (
      <Redirect to='/'/>
    );
  }
}

export default withRouter(SSOPage);
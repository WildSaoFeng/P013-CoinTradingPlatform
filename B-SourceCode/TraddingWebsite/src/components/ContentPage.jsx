import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      color:'#ffffff',
    },
  },
  appBar: {
    position: 'fixed',
    boxShadow: "none",
    backgroundColor:'transparent',
  },
  toolbarTitle: {
    flex: 1,
    color:'#ffffff',
  },
  layout: { 
    backgroundImage: `url('https://i.loli.net/2018/08/25/5b810c2dc3225.jpeg')`,
    backgroundAttachment: 'fixed',
    backgroundSize: '100% 100%',
    paddingBottom: theme.spacing.unit * 40,
  },
  layout2: {
    //高校组成以及蓝图
    // backgroundColor:'#05122b', //紫黑色
    backgroundColor:'#ffffff', //紫黑色
    // backgroundImage: `url('https://i.loli.net/2018/08/25/5b810c2dc3225.jpeg')`, 
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  layout3: {
    //价值主张
    backgroundColor:'#f4f9bb', //更浅的紫黑色
    paddingTop: theme.spacing.unit * 3 ,
    paddingBottom: theme.spacing.unit * 3,
  },
  layout4: {
    backgroundColor:'#353c43', //更深的紫黑色
    // paddingTop: theme.spacing.unit * 7,
    // paddingBottom: theme.spacing.unit * 7,
  },
  layout5: {
    backgroundColor:'#272b47', 
    color:"#0b91a5",
    paddingLeft:theme.spacing.unit * 2,
  },
  layout6:{
    backgroundColor:'#ffffff', 
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 15,
  },
  heroContent: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  mainContent: {
    marginTop:theme.spacing.unit * 8,
    marginBottom:theme.spacing.unit * -8,
  },
  heroContent2: {
    maxWidth: 1200,
    paddingLeft: theme.spacing.unit * 12,
  },
  heroContent3: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    paddingLeft: theme.spacing.unit * 12,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  button:{
    size: 'large',
  },
  navbutton:{
    color: theme.palette.common.white,
  },
  subtitle:{
   color:'primary'
  },
  hr:{
    color:'#234008',
  },
  uequ:{
    marginTop:theme.spacing.unit * 5,
    color:"#1d64d6",
  },
  ziti:{
    color:"#1d64d6",
  },
  Divider:{
    color:'#272b47'
  },
  a:{
    textDecoration: 0
  }
});




function ContentPage(props) {
  const { classes } = props;

  return (
    <React.Fragment>
    
      {/* 我们做过什么 */}
      <main className={classes.layout2} >
        <div className={classes.heroContent2}>
          <Grid container spacing={24} >
            <Grid item xs={6} >
                <img src="https://i.loli.net/2018/09/12/5b97f708e944f.png" alt="图1" align='center' width={500} />
            </Grid>
            <Grid item xs={6} >
                <div style={{ color:'#343d46'}}>
                  <br/><br/>
                  <h1 style={{ textAlign:'left'}} >我们做过什么？</h1>
                  <div style={{ color:'#a7adba'}}>
                    <h4 style={{ textAlign:"left"}} >全国高校区块链社区”四大“发起方之一</h4>
                    <h4 style={{ textAlign:"left"}} >全国第一届高校区块链大赛巡讲协办方</h4>
                    <h4 style={{ textAlign:"left"}} >多个区块链社区核心研发贡献</h4>
                    <h4 style={{ textAlign:"left"}} >多个世界领先区块链技术产品</h4>
                  </div>
                </div>
            </Grid>
          </Grid>
        </div>
      </main> 
      {/* 我们做过什么*/}

       {/* 繁星来源 */}
       <main className={classes.layout2} >
        <div className={classes.heroContent2}>
          <Grid container spacing={24} >
            <Grid item xs={6} >
              <div style={{ color:'#343d46'}}>
                  <br/><br/>
                  <h1 style={{ textAlign:'left'}} >“繁星”的来历？</h1>
                  <div style={{ color:'#a7adba'}}>
                    <h4 style={{ textAlign:"left"}} >名字来源“繁星”符合区块链分布、平等、共识的寓意，如果将分布在全球的节点点亮，从地球之外看上去就像是散落的繁星，分散却又互相有着联系。本社团是学术性质的社团。旨在帮助对于区块链与数字货币有兴趣的同学高效学习区块链的内涵，了解学科热点以及区块链技术实现方法，开阔科研视野，增进学术交流和增强实践能力。</h4>
                  </div>
                </div>
            </Grid>
            <Grid item xs={6} >
              <img src="https://i.loli.net/2018/09/12/5b97fed65da1f.png" alt="图1" align='center' width={500} />
            </Grid>
          </Grid>
        </div>
      </main> 
      {/* 繁星来源*/}

      {/* 还不上车 */}
      <main className={classes.layout6} >
        <div className={classes.heroContent2}>
          <Grid container spacing={24} >
            <Grid item xs={6} >
              <img src="https://i.loli.net/2018/09/12/5b980559f2a35.png" alt="图1" align='center' width={500} />
            </Grid>
            <Grid item xs={5} >
              <div style={{ color:'#343d46'}}>
                  <br/><br/>
                  <h1 style={{ textAlign:'left'}} >如何获得繁星积分?</h1>
                  <div style={{ color:'#a7adba'}}>
                    <h4 style={{ textAlign:"left"}} >We are hiring！</h4>
                    <h4 style={{ textAlign:"left"}} >加入繁星研发，一起开发基于区块链的网站、小程序、APP，前端、后端、全栈任你挑! </h4>
                    <h4 style={{ textAlign:"left"}} >加入繁星市场，一起撰写行业前沿报告，去行业龙头企业实习，二十五岁前走向人生巅峰不是梦！</h4>
                    <h4 style={{ textAlign:"left"}} >加入繁星运营，一起制作精美海报，高效组织国际活动，排版推送火遍全球！</h4>
                    <h4 style={{ textAlign:"left"}} >或者——仅仅是加入社团会员，即可每月领取繁星积分！</h4>
                  </div>
                </div>
            </Grid>
          </Grid>
        </div>
      </main> 
      {/* 还不上车 */}


      {/* End footer */}
    </React.Fragment>
   
  );
}

ContentPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentPage);
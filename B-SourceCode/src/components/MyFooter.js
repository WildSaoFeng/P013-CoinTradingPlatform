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




function MyFooter(props) {
    const { classes } = props;

    return (
        <React.Fragment>


            {/* Footer */}
            <footer className={classes.layout4}>
                <Grid container spacing={40}>
                    <Grid item xs={1} >
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ color:'#a7adba'}}>
                            <h1 style={{ textAlign:"left"}} >央财繁星社</h1>
                        </div>
                    </Grid>
                    <Grid item xs={1} >
                    </Grid>
                    <Grid item xs={2} >
                        <div style={{ color:'#a7adba'}}>
                            <h3 style={{ textAlign:"left"}} >联系我们</h3>
                            <h5 style={{ textAlign:"left"}} >关注公众号</h5>
                        </div>
                    </Grid>
                    <Grid item xs={3} >
                        <img src="https://i.loli.net/2018/09/12/5b9805ad4cffd.jpeg" alt="orwzma.png" title="orwzma.png" width={100} />
                    </Grid>
                </Grid>
            </footer>

            {/* <div className={classes.layout5} >
            <Grid container spacing={8} >
              <Grid item xs={5}  >
                 ©️ BTCU. ALL RIGHTS RESERVED
              </Grid>
              <Grid item xs={7} >
                Designed by 清华大学学生区块链协会 Developed & Deployed by 中财“繁星”区块链研究协会
              </Grid>
            </Grid>
      </div> */}
            {/* End footer */}
        </React.Fragment>

    );
}

MyFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyFooter);
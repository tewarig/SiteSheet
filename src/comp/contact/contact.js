import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: theme.palette.background.emphasis,
  },
  midColumn: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4)
    }
  }
}));

export default function Contact({header,dis,address,statePin,contact1,contactDes1,constactDes2,email,phone}) {
  const classes = useStyles();

  const content = {
    'header': header,
    'description': dis,
    'contact1':  'Address',
    'contact1-desc1': address,
    'contact1-desc2': statePin,
    'contact2': 'Email',
    'contact2-desc': email,
    'contact3': 'Social Media',
    'contact4': 'Phone',
    'contact4-desc': phone,
    
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h2" gutterBottom={true}>{content['header']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.midColumn}>
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc2']}</Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" mb={3}>
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <WebAssetIcon color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact3']}</Typography>
                  <IconButton href="#" color="inherit">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex">
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <PhoneIcon color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact4']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact4-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
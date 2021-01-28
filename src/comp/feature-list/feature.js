import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import ApartmentIcon from '@material-ui/icons/Apartment';
import DnsIcon from '@material-ui/icons/Dns';
import TapAndPlayIcon from '@material-ui/icons/TapAndPlay';

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: fade(theme.palette.background.emphasis, .6),
  },
  img: {
    maxWidth: '100%'
  }
}));

export default function Feature({badge,header1,header2,dis,feature1,feature2,feature3}) {
  const classes = useStyles();

  const content = {
    'badge': badge,
    'header-p1':  header1,
    'header-p2':  header2,
    'description':  dis,
    'col1-header':  feature1,
    'col2-header': feature2,
    'col3-header':  feature3,
    'image': 'nereus-assets/img/illustrations/financial-report.svg',
  
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  <Typography color="primary" variant="h3" component="span">{content['header-p1']} </Typography>
                  <Typography variant="h3" component="span">{content['header-p2']}</Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
                <div>
                  <Box mt={3} mb={2} display="flex" alignItems="center">
                    <Box pr={2}>
                      <Avatar className={classes.iconWrapper} variant="rounded">
                        <ApartmentIcon color="primary" />
                      </Avatar>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom={true}>{content['col1-header']}</Typography>
                  </Box>
                  <Box mb={2} display="flex" alignItems="center">
                    <Box pr={2}>
                      <Avatar className={classes.iconWrapper} variant="rounded">
                        <DnsIcon color="primary" />
                      </Avatar>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom={true}>{content['col2-header']}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box pr={2}>
                      <Avatar className={classes.iconWrapper} variant="rounded">
                        <TapAndPlayIcon color="primary" />
                      </Avatar>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom={true}>{content['col3-header']}</Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={content['image']} alt="" className={classes.img} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Card from '@mui/material/Card';
import BasicCard from './BasicCard'
import Card1 from './Card1'

// import { Card, Row, Col, Container } from "react-bootstrap";




const useStyles = makeStyles((theme: Theme) =>
createStyles({
	paper: {
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	},
	root: {
	flexGrow: 1,
	},
}),
);

export default function FullWidthGrid() {
const classes = useStyles();

  return (
    <div style={{ width: '100%',
          padding: '10px' }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12} sm={4}>
      <BasicCard />
      <Card1 />
      <BasicCard />
      </Grid>
      <Grid item xs={12} sm={4}>
      <Paper className={classes.paper}>1/4 Size</Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
      <BasicCard />
      <BasicCard />
      <BasicCard />
      </Grid>
    </Grid>
    </div>
  );
}

import React from 'react'
import useStyles from './styles'
import { Card,CardHeader,CardContent,Typography,Grid,Divider } from '@material-ui/core'
import Form from './form/Form';
import Lists from './List/List';

import { Tracker } from '../../context/context';
import { useContext } from 'react';
const Main = () => {
    const {balance}=useContext(Tracker);

    const classes=useStyles();
  return (
   <Card className={classes.root} > 
<CardHeader title="Expense tracker" subheader="Powered by Speechly"></CardHeader>
<CardContent>
    <Typography align='center' variant='h5'>Total Balance Rs {balance}</Typography>

<Divider/>
<Form/>
</CardContent>
<CardContent className={classes.cardcontent}>
    <Grid container spacing={2}>
        <Grid item xs={12}>
<Lists/>
        </Grid>
    </Grid>

</CardContent>
   </Card>
  )
}

export default Main
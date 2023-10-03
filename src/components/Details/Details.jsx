import React from 'react'
import { Card,CardHeader,CardContent,Typography } from '@material-ui/core';
import Usetransaction from '../../usetransaction';
import useStyles from './styles'
import { Doughnut } from 'react-chartjs-2';
const Details = ({title}) => {
    const classes=useStyles();
    const {total,chartData}=Usetransaction(title);
  return (
   <Card className={title === "Income" ? classes.income : classes.expense }>
    <CardHeader title={title}/>
    <CardContent>
        <Typography variant='h5'>
Rs {total}        </Typography>
<Doughnut data={chartData} />
    </CardContent>
   </Card>
  )
}

export default Details
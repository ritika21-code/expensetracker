import React, { useContext } from 'react'
import { TextField,Typography,Grid,Button, FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
import useStyles from './styles'
import { Tracker } from '../../../context/context'
import {v4 as uuidv4} from 'uuid' 
import { expenseCategories, incomeCategories } from '../../../constants/categories'
import formatdate from '../../../utils/formatdate'
const initialstate={
  amount:'',
  category:'',
  type:'Income',
  date:new Date()
}
const Form = () => {
 
const {addtrans}=useContext(Tracker);
 
    const classes= useStyles();
    const [formdata,setformdata]=React.useState(initialstate);
    
    const createTrans=()=>{
const transaction={...formdata,amount:Number(formdata.amount),id:uuidv4()}
    addtrans(transaction);
    setformdata(initialstate)
  }
 const selectedcategories = formdata.type === 'Income' ? incomeCategories : expenseCategories
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>

        </Grid>
<Grid item xs={6}>
<FormControl fullWidth>
<InputLabel>Type</InputLabel>
<Select value={formdata.type} onChange={(e)=>(setformdata({...formdata,type:e.target.value}))}>
    <MenuItem value="Income">Income</MenuItem>
    <MenuItem value="Expense">Expense</MenuItem>
</Select>
</FormControl>
</Grid>
<Grid item xs={6}>
<FormControl fullWidth>
<InputLabel>Category</InputLabel>
<Select value={formdata.category} onChange={(e)=>(setformdata({...formdata,category:e.target.value}))}>
{selectedcategories.map((c)=>
   <MenuItem key={c.type} value={c.type} >{c.type}</MenuItem>)}
</Select>
</FormControl>
</Grid>
<Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth value={formdata.amount} onChange={(e)=>(setformdata({...formdata,amount:e.target.value}))} />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date" value={formdata.date} onChange={(e)=>(setformdata({...formdata,date:formatdate(e.target.value)}))} />
      </Grid>
<Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTrans}>Create</Button>
    </Grid>
  )
}

export default Form
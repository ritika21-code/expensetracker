import React,{useReducer} from "react";
import { createContext } from "react";
import contextreducer from "./contextreducer";
const initialState=JSON.parse(localStorage.getItem('transactions'))|| [];
export const Tracker = createContext(initialState);
export const Provider=({children})=>{
    const[transactions,dispatch]=useReducer(contextreducer,initialState);
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    console.log(transactions);
    const deletetrans=(id)=>{
        dispatch({type:'DELETE',payload:id});
    }
    const addtrans=(transactions)=>{
        dispatch({type:'ADD',payload:transactions});
    }
    return(
<Tracker.Provider value={{deletetrans,addtrans,transactions,balance}}>
{children} 
</Tracker.Provider>)
}   
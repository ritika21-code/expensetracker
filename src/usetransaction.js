// import { useContext } from "react";
import { incomeCategories, expenseCategories } from "./constants/categories";
import  { useContext } from 'react'; // Import useContext from React
import { Tracker } from './context/context';

const Usetransaction = (title) => { // Use an uppercase component name
    const { transactions } = useContext(Tracker);

    const righttrans = transactions.filter((t) => t.type === title);
    const total = righttrans.reduce((acc, curval) => acc + curval.amount, 0);

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    righttrans.forEach((t) => {
        const category = categories.find((c) => t.category === c.type)
        if (category) category.amount += t.amount;
    });

    const filtered = categories.filter((c) => c.amount > 0);

    const chartData = {
        datasets: [{
            data: filtered.map((c) => c.amount),
            backgroundColor: filtered.map((c) => c.color),
        }],
        labels: filtered.map((c) => c.type),
    };

    return { filtered, total, chartData };
};

export default Usetransaction;


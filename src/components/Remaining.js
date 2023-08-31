// Remaining.js
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remainingBudget = budget - totalExpenses; // Calculate remaining budget based on the context's budget
  useEffect(() => {

  
  if (remainingBudget < 0){
    alert("You cannot reduce the budget to below what you've already spent.")

  }}, [remainingBudget])
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: {currency}{remainingBudget}</span>
    </div>
  );
};

export default Remaining;


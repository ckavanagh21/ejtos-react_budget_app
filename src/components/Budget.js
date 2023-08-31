import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
  const [budget, setBudget] = useState(0); // Initialize budget as a number, e.g., 0
  const maxBudget = 20000;
  const { dispatch, currency } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    const inputValue = parseFloat(event.target.value);

    if (inputValue > maxBudget) {
      alert("The value cannot exceed remaining funds £" + maxBudget);
      setBudget(maxBudget);
    } else {
      setBudget(inputValue);
      dispatch({ type: 'SET_BUDGET', payload: inputValue }); // Update the global budget in context
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: {currency}
        <input
          required='required'
          type='number'
          step="10"
          id='budget'
          value={budget}
          style={{ marginLeft: '2rem', size: 10 }}
          onChange={handleBudgetChange}
        />
      </span>
    </div>
  );
};

export default Budget;

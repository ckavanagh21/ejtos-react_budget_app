import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext); // Access currency from context

  const handleCurrencyChange = (event) => {
    // Update the currency in the context when it changes
    dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
  };

  return (
    <div>
      <div className='row'>
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={handleCurrencyChange}
            value={currency} // Set the selected value based on the context
          >
            <option value="$"> $ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Currency;

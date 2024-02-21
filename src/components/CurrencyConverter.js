import React, {  useState } from 'react';

const CurrencyConverter = () => {
  // Define state for the selected currency
  const [currency, setCurrency] = useState('');

  // Function to handle currency change
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  // Function to get currency symbol based on selection
  const getCurrencySymbol = () => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'GBP':
        return '£';
      case 'EUR':
        return '€';
      case 'INR':
        return '₹';
      default:
        return '';
    }
  };

  return (
    <div className='converter'>
      <h2>Currency Converter</h2>
      <label htmlFor="currency-select">Select Currency:</label>
      <select id="currency-select" value={currency} onChange={handleCurrencyChange}>
        <option value="">Select Currency</option>
        <option value="USD">Dollar ($)</option>
        <option value="GBP">Pound (£)</option>
        <option value="EUR">Euro (€)</option>
        <option value="INR">Rupee (₹)</option>
      </select>
    </div>
  );
};

export default CurrencyConverter;
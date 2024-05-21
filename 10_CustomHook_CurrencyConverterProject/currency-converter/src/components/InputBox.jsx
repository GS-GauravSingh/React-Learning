import React, { useId } from 'react'

function InputBox({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectedCurrency = "USD", amountDisabled = false, currencyDisabled = false }) {

  // "useId" hook basically returns a unique value
  const amountInputId = useId();

  return (
    <div className='flex flex-col customResolution:flex-row customResolution:justify-between p-2 border rounded-md bg-white relative' >

      {/* First Container */}
      <div className='flex flex-col flex-1 text-black font-bold customResolution:p-2 relative'>
        <label htmlFor={amountInputId} className='mb-2 text-gray-500'> {label} </label>
        <input
          id={amountInputId}
          type="number"
          className='border-none outline-none bg-transparent font-semibold text-[1.1rem]'
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => (onAmountChange && onAmountChange(Number(e.target.value)))
          } />
      </div>

      {/* Second Container */}
      <div className='flex flex-col flex-1 text-black mt-1 customResolution:mt-0 customResolution:p-2 relative'>
        <div className='flex flex-col customResolution:items-end font-bold'>
          <p className='mb-2 text-gray-500'>Currency Type</p>
          <select
            className='border outline-none bg-gray-300 w-[6.2rem] py-1 rounded-md font-semibold cursor-pointer text-black'
            onChange={(e) => (onCurrencyChange && onCurrencyChange(e.target.value))}
            disabled={currencyDisabled}
            value={selectedCurrency}
          >
            {/* Loop througn currency options */}
            {currencyOptions.map(function (currency) {
              return <option key={currency} value={currency}>{currency}</option>
            })}

          </select>
        </div>

      </div>
    </div>
  )
}

export default InputBox;
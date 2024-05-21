import React, { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './custom-hook/useCurrencyInfo'

function App() {

  // state variable from amount.
  const [amount, setAmount] = useState(0);

  // state variable from conversion.
  const [convertFrom, setConvertFrom] = useState("usd");
  const [convertTo, setConvertTo] = useState("inr");

  // Amount after conversion
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Using our custom Hook
  const currencyInfo = useCurrencyInfo(convertFrom.toLowerCase());
  const options = Object.keys(currencyInfo);

  // Function to swap conversion e.g., USD to INR (swap) INT to USD.
  const swap = () => {
    setConvertFrom(convertTo);
    setConvertTo(convertFrom);
    setConvertedAmount(0);
    setAmount(0);
  }

  // Calculating result
  const calculateResult = () => {
    const result = (amount * currencyInfo[convertTo]).toFixed(2);
    setConvertedAmount(result);
  }


  return (
    <div className='min-h-screen grid place-content-center' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1669881336715-5a51a78d5434?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

      {/* Currency Converter - Parent Container */}
      <div className='p-4 text-white border rounded-md w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] relative' style={{ backdropFilter: "blur(5px)" }}>

        <form
          className='flex flex-col gap-6'
          onSubmit={(event) => {
            event.preventDefault();
            calculateResult();
          }}>

          {/* Input Components */}
          <div className='flex flex-col gap-2'>
            {/* Input Box */}
            <InputBox label="From" amount={amount} onAmountChange={function(changedAmount){ setAmount(changedAmount) }} onCurrencyChange={function (changedCurrency) { setConvertFrom(changedCurrency) }} currencyOptions={options} selectedCurrency={convertFrom} />

            {/* Swap Button */}
            <div className='flex justify-center'>
              <button
                className='px-4 py-1 rounded-md bg-blue-600 font-medium hover:opacity-80'
                onClick={swap}
              >Swap</button>
            </div>

            {/* Input Box */}
            <InputBox label="To" amount={convertedAmount} onCurrencyChange={function (changedCurrency) { setConvertTo(changedCurrency) }} currencyOptions={options} selectedCurrency={convertTo} amountDisabled />
          </div>

          {/* Submit Button */}
          <button type='submit' className='p-2 bg-blue-600 rounded-md font-semibold sm:text-xl hover:opacity-80'>Convert {convertFrom.toUpperCase()} to {convertTo.toUpperCase()}</button>
        </form>

      </div>


    </div>
  )
}

export default App;
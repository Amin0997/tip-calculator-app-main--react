import React, { useState, useRef } from 'react';
import './Calculator.scss'

import Bill from './Sections/Bill/Bill'
import Tips from './Sections/Tips/Tips'
import PeopleCounter from './Sections/PeopleCounter/PeopleCounter'
import Result from './Sections/Result/Result'


function Calculator() {
  const [billValue, setBillValue] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [customTip, setCustomTip] = useState();

  const billInputRef = useRef(null);
  const customTipRef = useRef(null);
  const peopleCountRef = useRef(null);

  const handleBillChange = (newValue) => {
    setBillValue(newValue)
  };
  const handleTipSelection = (tip) => {
    setSelectedTip(tip);
  };
  const handleCustomTip = (customTip) => {
    setCustomTip(customTip)
  };
  const handlePeopleCounter = (count) => {
    setPeopleCount(count)
  };

  const handleReset = () => {
    setBillValue(0);
    setSelectedTip(0);
    setPeopleCount(0);
    setCustomTip(null);
    billInputRef.current.value = '';
    customTipRef.current.value = '';
    peopleCountRef.current.value = '';
  };

  return (
    <div className="calculator__container">
      <section className="left__section">

        <Bill 
          onBillChange={handleBillChange} 
          inputRef={billInputRef}/>

        <Tips 
          handleTipSelection={handleTipSelection} 
          handleCustomTip={handleCustomTip} 
          onReset={handleReset}
          inputRef={customTipRef}/>

        <PeopleCounter 
          onPeopleCount={handlePeopleCounter}
          inputRef={peopleCountRef}/>

      </section>

        <Result 
          billValue={billValue} 
          selectedTip={selectedTip} 
          peopleCount={peopleCount} 
          customTipValue={customTip}
          onReset={handleReset}/>

    </div>
  )
}

export default Calculator
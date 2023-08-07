import React from "react";
import './Tips.scss'

function Tips({ handleTipSelection, handleCustomTip, inputRef }) {

    const handleTipClick = (tip) => {
        handleTipSelection(tip);
        handleCustomTip('')
    };

        const handleCustomTipChange = (event) => {
            const customTip = event.target.value;
            handleCustomTip(Number(customTip))
    };

    return (
        <section className="tips__section">

            <h4 className="tips__header">Select Tip %</h4>

            <div className="tips__btns">
                <button
                    className="tips__btns_5 tips-btn"
                    onClick={() => handleTipClick(5)}
                    >5%</button>

                <button 
                    className="tips__btns_10 tips-btn"
                    onClick={() => handleTipClick(10)}
                    >10%</button>

                <button 
                    className="tips__btns_15 tips-btn"
                    onClick={() => handleTipClick(15)}
                    >15%</button>

                <button 
                    className="tips__btns_25 tips-btn"
                    onClick={() => handleTipClick(25)}
                    >25%</button>

                <button 
                    className="tips__btns_50 tips-btn"
                    onClick={() => handleTipClick(50)}
                    >50%</button>
                    
                    <input
                        ref={inputRef} 
                        className="tips__btns_custom tips-btn"
                        placeholder="Custom"
                        type="number"
                        onChange={handleCustomTipChange}
                        onFocus={handleCustomTipChange}
                        />
                </div>

        </section>
    )
}

export default Tips
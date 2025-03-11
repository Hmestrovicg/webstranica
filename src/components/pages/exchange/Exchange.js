import React, {useState, useEffect} from "react";

const Exchange = () => { 
    const [currencyRates, setCurrencyRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [currencyBase, setCurrencyBase] = useState('EUR');

    useEffect(
        () => {
            fetch('https://api.frankfurter.dev/v1/latest?base=' + currencyBase)
            .then(response => {
                return response.json();
            })
            .then(data => 
                setCurrencyRates(data))
            }, [currencyBase] 
        );
    if (!currencyRates.rates) return <p>Loading...</p>;
    
    return(
        <div className="container blog">
            <h1>Exchange</h1>

            <input type="number" value={amount} onChange={ (e) => setAmount(e.target.value)} />
            
            <select value={currencyBase} onChange={ (e) => setCurrencyBase(e.target.value)}>
                {Object.keys(currencyRates.rates).map( currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            { Object.keys(currencyRates.rates).map( currency => (
                <p key={currency}>
                    <strong>{currency}</strong> : {amount * currencyRates.rates[currency]} 
                </p>
            ))}
        </div>
    );
}

export default Exchange;
import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <main className='text-center p-5 shadow'>
            <h4>Balance</h4>
            <h3 id="balance">${total}</h3>
        </main>
    )
}

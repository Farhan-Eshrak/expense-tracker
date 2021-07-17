import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Transaction } from './Transaction';
export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);


    return (
        <div className='container p-5 shadow rounded'>
            <h3 className='text-center'>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}

            </ul>
        </div>
    )
}

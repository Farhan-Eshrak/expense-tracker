import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import './App.css'
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';



const App = () => {
  return (
    <div id="mainbg">
      <div className="p-5">
        <GlobalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 col-12 col-sm-12">
                <Balance />
                <IncomeExpense />
                {/* <TransactionList /> */}
              </div>

              <div className="col-md-6 col-12 col-sm-12">
                <AddTransaction />
              </div>
              <div className="col-md-12 col-12 col-sm-12 mt-5">
                <TransactionList />
              </div>
            </div>
          </div>

        </GlobalProvider>
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AppStructure from './components/App-structure';
import {TransactionProvider} from './services/transaction-context'
function App() {
  return (
    <div className="back">
      <TransactionProvider>
      <Navbar />
      <AppStructure />
      </TransactionProvider>
    </div>
  );
}

export default App;

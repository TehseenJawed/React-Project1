import React, { useContext, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import {TransactionContext} from './../services/transaction-context';
export default function Structure() {
  let { transactions, addTransaction, deleteTransactions } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
        alert("Please enter correct value");
        return false;
    }
    addTransaction({
        amount: Number(newAmount),
        desc: newDesc
    });

    setDesc('');
    setAmount(0)
}

const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0)
            income = income + transactions[i].amount
    }
    return income;
}

const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0)
            expense += transactions[i].amount
    }
    return expense;
}
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12" className="inpt-form p-3 Colo mt-5">
              <p className="align-middle"><b>Enter Your Values</b></p>
           <form onSubmit={handleAddition}>
           
           <label>Name</label> <input type='text' placeholder="Name" onChange={(ev) => setDesc(ev.target.value)} required/>
           
           <label>Value</label> <input type='text' placeholder="Value" onChange={(ev) => setAmount(ev.target.value)} name="amount" required/>
           <button className="rounded" >Submit</button>
           </form>
          </Col>
          </Row>
          </Container>
          </Col>
          <Col xs lg="6">
          <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12" className="inpt-form p-3 Colo mt-5">
             {/* Final Result Display */}
             <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4" className="res-cont-red p-3 result-styles">
            Expense : {getExpense()}
          </Col>
          <Col xs lg="4" className="res-cont-green p-3 result-styles">
            Income : {getIncome()}
          </Col>
          <Col xs lg="4" className="res-cont-total p-3 result-styles">
            Balance : {getIncome() + getExpense()}
          </Col>
          </Row>
          </Container>
          <p className="align-middle"><b>History</b></p>

          {transactions.map((transObj,ind) =>{
            return(
              <Container key={transObj.id}>
        <Row className={transObj.amount < 0 ? 'neg-history-styles rounded':'history-styles rounded'}>
          <Col xs lg="7" className="p-3">
            {transObj.desc}
          </Col>
          <Col xs lg="2" className="p-3">  
            {transObj.amount}
          </Col>
          <Col xs lg="3" className="p-3">  
            <button className="rounded" onClick = {()=>deleteTransactions(transObj.id)}>Delete</button>
          </Col>
          </Row>
          </Container>
            )
          })}

          </Col>
          </Row>
          </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

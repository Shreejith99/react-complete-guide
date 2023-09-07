import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enterdTitle, setEnterdTtitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  // const [userInput,setUserInput]= useState({
  //     enterdTitle:'',
  //     enteredAmount:'',
  //     enterdDate:''
  // });
  const titleChangeHandler = (event) => {
    setEnterdTtitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdTitle:event.target.value,
    // })
    // setUserInput((prevState) =>{

    //   return {...prevState,enterdTitle:event.target.value}
    // } );
  };

  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    // })
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdDate:event.target.value,
    // })
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnterdTtitle(value);
    } else if (identifier === "amount") {
      setEnterdAmount(value);
    } else {
      setEnterdDate(value);
    }
  };

  const submitHandler =(event) =>{
    //avaoiding reload full page 
    event.preventDefault();
    const expenseData ={
      title:enterdTitle,
      amount:enterdAmount,
      date:new Date(enterdDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnterdTtitle('');
    setEnterdAmount('');
    setEnterdDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
          {/* <input type="text"  onChange={(event)=> inputChangeHandler('title',event.target.value)}/> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangeHandler}
          />
          {/* <input type="number" min="0.01" step="0.01" onChange={(event)=> inputChangeHandler('amount',event.target.value)} /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* <input type="date" min="2022-01-01" max="2024-12-31" onChange={(event)=> inputChangeHandler('date',event.target.value)}/> */}
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enterdDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

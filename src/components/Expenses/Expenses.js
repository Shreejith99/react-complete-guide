import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filterdYear, setFilterdYear] = useState("2020");
  let filterInfoText = "2019,2021 &2022";

  if (filterdYear === "2019") {
    filterInfoText = "2020,2021 &2022";
  } else if (filterdYear === "2021") {
    filterInfoText = "2019,2020 &2022";
  } else if (filterdYear === "2022") {
    filterInfoText = "2019,2020 &2021";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>select years filter{filterInfoText}</p>
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;

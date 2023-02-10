import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseData";
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate  date={props.date} day={day} year={year}/>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2 className="expense-item__price">{props.amount}</h2>
      </div>
    </div>
  );
}
export default ExpenseItem;

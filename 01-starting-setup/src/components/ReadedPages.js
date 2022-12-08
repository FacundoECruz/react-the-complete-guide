import ReadedPagesDate from "./ExpenseDate";
import "./ReadedPages.css";

function ReadedPages(props) {
  return (
    <div className="readed-pages-item">
      <ReadedPagesDate date={props.date} />
      <div className="readed-pages-item__description">
        <h2>{props.course}</h2>
        <div className="readed-pages-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ReadedPages;

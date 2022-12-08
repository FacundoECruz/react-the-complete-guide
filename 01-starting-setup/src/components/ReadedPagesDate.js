import './ReadedPagesDate.css'

function ReadedPagesDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
  
    return (
      <div className="readed-pages-date">
        <div className="readed-pages-date__month">{month}</div>
        <div className="readed-pages-date__year">{year}</div>
        <div className="readed-pages-date__day">{day}</div>
      </div>
    );
  }
  
  export default ReadedPagesDate;
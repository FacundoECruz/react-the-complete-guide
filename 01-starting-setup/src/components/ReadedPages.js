import './ReadedPages.css'

function ReadedPages() {
    const readedPagesDate = new Date(2022, 2, 2).toDateString();
    const course = 'Historia';
    const readedPagesQty = 24;

  return (
    <div className='readed-pages-item'>
      <div>{readedPagesDate}</div>
      <div className='readed-pages-item__description'>
        <h2>{course}</h2>
        <div className='readed-pages-item__price'>{readedPagesQty}</div>
      </div>
    </div>
  );
}

export default ReadedPages;
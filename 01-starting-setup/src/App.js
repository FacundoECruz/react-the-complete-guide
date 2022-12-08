import ReadedPages from './components/ReadedPages'; 

function App() {
  const pages = [
    {
      id: 'e1',
      course: 'Geografia Economica',
      amount: 24,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', course: 'Sociologia del trabajo', amount: 49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      course: 'Historia Latinoamericana',
      amount: 29,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      course: 'Filosofia',
      amount: 45,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ReadedPages
        course={pages[0].course}
        amount={pages[0].amount}
        date={pages[0].date}
      />
      <ReadedPages
        course={pages[1].course}
        amount={pages[1].amount}
        date={pages[1].date}
      />
      <ReadedPages
        course={pages[2].course}
        amount={pages[2].amount}
        date={pages[2].date}
      />
      <ReadedPages
        course={pages[3].course}
        amount={pages[3].amount}
        date={pages[3].date}
      />
    </div>
  );
}

export default App;

import ReadedPages from './components/ReadedPages'; 

function App() {
  const Pages = [
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
      <Pages
        course={Pages[0].course}
        amount={Pages[0].amount}
        date={Pages[0].date}
      />
      <Pages
        course={Pages[1].course}
        amount={Pages[1].amount}
        date={Pages[1].date}
      />
      <Pages
        course={Pages[2].course}
        amount={Pages[2].amount}
        date={Pages[2].date}
      />
      <Pages
        course={Pages[3].course}
        amount={Pages[3].amount}
        date={Pages[3].date}
      />
    </div>
  );
}

export default App;

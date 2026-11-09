import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentInfo from './StudentInfo';

function App() {
  // The page's information is kept in state...
  const [info] = useState({
    title: 'Welcome to Fullstack Development - I',
    subtitle: 'React JS Programming Week09 Lab exercise',
    studentId: '101583426',
    name: 'Travis Eweka',
    school: 'George Brown Polytechnic, Toronto',
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        {/* ...and passed to the StudentInfo component as props */}
        <StudentInfo
          title={info.title}
          subtitle={info.subtitle}
          studentId={info.studentId}
          name={info.name}
          school={info.school}
        />
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';

const backendUrl = 'http://localhost:4201/employees';

interface IEmployee {
  employeeID: number;
  firstName: string;
}

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(backendUrl);
      const _employees = response.data;
      setEmployees(_employees);
    })();
  }, []);

  return (
    <div className="App">
      <h1>MERN Site Demo</h1>
      <p>There are {employees.length} employees.</p>
      {employees.map(employee => (
        <div key={employee.employeeID}>{employee.firstName}</div>
      )
      )}
    </div>
  )
}

export default App

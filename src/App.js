import React from 'react';
import './App.css';
import { MDBDataTableV5 } from 'mdbreact';
import columns from "./employeeData/tableColumns"
import rows from "./employeeData/tableRows"


function App() {
  
  const data = {
    columns,
    rows
  };
  
  
  return (
    <div className="container-fluid">

        <MDBDataTableV5
          striped
          bordered
          small
          data={data}
          hover
          searchTop
          searchBottom={false}
        />
      
    </div>
      
  );
}

export default App;

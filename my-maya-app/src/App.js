import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [results, setResults] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = () => {
    // Call your API or process the date and display the results
    // For example:
    setResults(`You have selected: ${selectedDate}`);
  };

  return (
    <div className="App">
      <h1>Maya Calendar App</h1>
      <label htmlFor="datePicker">Select a date:</label>
      <input
        type="date"
        id="datePicker"
        name="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div className="results">{results && <p>{results}</p>}</div>
    </div>
  );
}

export default App;

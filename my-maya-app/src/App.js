import React, { useState } from "react";
import "./App.css";

function getDreamspellKin(date) {
  const gregorianStartDate = new Date(1853, 6, 26); // July 26, 1853
  const dreamspellStartDate = new Date(1853, 6, 26); // July 26, 1853

  const daysDifference = Math.floor(
    (date - gregorianStartDate) / (1000 * 60 * 60 * 24)
  );
  const kinNumber = ((daysDifference % 260) + 260) % 260;

  const toneNames = [
    "Magnetic",
    "Lunar",
    "Electric",
    "Self-existing",
    "Overtone",
    "Rhythmic",
    "Resonant",
    "Galactic",
    "Solar",
    "Planetary",
    "Spectral",
    "Crystal",
    "Cosmic",
  ];

  const solarSealNames = [
    "Dragon",
    "Wind",
    "Night",
    "Seed",
    "Serpent",
    "Worldbridger",
    "Hand",
    "Star",
    "Moon",
    "Dog",
    "Monkey",
    "Human",
    "Skywalker",
    "Wizard",
    "Eagle",
    "Warrior",
    "Earth",
    "Mirror",
    "Storm",
    "Sun",
  ];

  const tone = (kinNumber % 13) + 1;
  const solarSeal = kinNumber % 20;

  return {
    kinNumber: kinNumber + 1,
    toneName: toneNames[tone - 1],
    solarSealName: solarSealNames[solarSeal],
  };
}

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [results, setResults] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = () => {
    const date = new Date(selectedDate);
    const dreamspellKin = getDreamspellKin(date);
    setResults(
      `Kin ${dreamspellKin.kinNumber}: ${dreamspellKin.toneName} ${dreamspellKin.solarSealName}`
    );
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

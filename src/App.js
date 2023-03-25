import './App.css';
import { CityItem } from './components/CityItem';
import { InputField } from './components/shared/InputField';
import React, { useState } from 'react';

function App() {
  const cities = [
    {
      Key: "1",
      EnglishName: "Miskolc",
      PrimaryPostalCode: "3500",
      Country: {
        ID: "HU",
        EnglishName: "Hungary",
      },
      AdministrativeArea: {
        ID: "BAZ",
        EnglishName: "Borsod-Abaúj-Zemplén",
        EnglishType: "County",
      },
    },
    {
      Key: "2",
      EnglishName: "Ventura",
      PrimaryPostalCode: "93001",
      Country: {
        ID: "US",
        EnglishName: "United States",
      },
      AdministrativeArea: {
        ID: "CA",
        EnglishName: "California",
        EnglishType: "State",
      },
    },
  ];

  const [city, setCity] = useState("");

  const handleCityInput = e => {
    setCity(e.target.value)
  };

  return (
    <div className="App">
      <h1>Weather Wizard</h1>
      <InputField handleCityInput={handleCityInput}>
      </InputField>
      <hr></hr>
      <CityItem cities={cities} />
    </div>
  );
}

export default App;

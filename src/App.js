import './App.css';
import { CityItem } from './components/CityItem';
// Import and use the component in the App.js file
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

  /*
 // in the App.js file, import `useState` and using array destructuring, create a state that will hold the user input from the input field. This will be the city name user is supposed to enter.
// Choose a name for your state and setter function to be descriptive.
*/

  const [city, setCity] = useState("");

  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  // };

/*
Create a handler function to update the state value that holds the city name
  -Use handle word to start the name of the function it takes one parameter, event
  -This handler function will take the value of the event target and set the state variable with the setter function
  -Attach it to the input field with the proper attribute so that every time the user types something, this function is called
*/

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

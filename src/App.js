import './App.css';
// naming convention for reusable components is to name component with "Item"
import { CityItem } from './components/CityItem';

function App() {
// In the App.js
// create a variable that is an array of objects
// In the array, have at least two objects. Each object must have the following fields:
// Key - a string of numbers - represents the id of the object
// EnglishName - string - represents the name of a city
// PrimaryPostalCode - a string of numbers - represents the zip code of the city
// Country - object - represents the country the city is located in
    // ID - string - represents the abbreviation of the country (i.e. “US”)
    // EnglishName -string - represents the name of the country
// AdministrativeArea - object - represents the state/county/area of the city
    // ID - string - represents the abbreviation for the state/county/area (i.e. “CA”, “MA”)
    // EnglishName - string - represents the name of the state/county/area
    // EnglishType - string - represents the type (i.e. “State”, “County”, “Area”)
    // Values of each field can be random value, but make sure the type match above
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
      EnglishType: "County"
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
      EnglishType: "State"
    },
  },
];

// // App.js should include the following functions:
// // A handler function to handle the input value change
const handleInputChange = e => {
  // Your function may not need to be functional at the moment but you can console log the values entered into the input field so that you know it is connected properly.
  console.log(e.target.value)
}


return (
  // App.js should include the following JSX tags in the return field:
  <div className="App">
    {/* h1 */}
    <h1>Weather Wizard</h1>
    {/* label */}
    <label htmlFor="city">City:</label>
    {/* attach this handler function to the input with the correct attribute to handle input change */}
    {/* input */}
    <input type="text" id="city" onChange={handleInputChange} />
    {/* hr */}
    <hr></hr>
    {/* Your custom component (name something that describes what it does, remember
    components start with capital letter) 
    {/* App.js should provide the array to the custom component as a props */}
    {/* custom component */}
    <CityItem cities={cities} />

  </div>
);
}

export default App;

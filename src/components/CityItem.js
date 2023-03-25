import React from "react";

export function CityItem({cities}) {

  /*
-Create a handler function that will be called when this button is clicked
-This function will take a parameter. This parameter is the city it is clicked for.
-This function will only console log something so that we know it works as expected, for example the name of the city this buttons corresponds to.
*/
  
  const handleClick = (city) => {
    console.log(city);
  };

  return cities.map((city) => (
    <ul key={city.Key}>
      <li>
        {city.EnglishName}, {city.AdministrativeArea.ID}, {city.Country.ID}
      </li>
      {/* Add a button inside the ul element as a li element. */}
      {/* This button will call the handler function every time it is clicked. Add the correct attributes to the button element to call the handler function when clicked. */}
      {/* use anonymous function for onClick so handleclick function doesn't fire upon page loading */}
      <button onClick={() => handleClick(city.EnglishName)}>Log City</button>
    </ul>
  ));
}
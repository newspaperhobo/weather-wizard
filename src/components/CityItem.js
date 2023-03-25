import React from "react";

export function CityItem({cities}) {  
  const handleClick = (city) => {
    console.log(city);
  };

  return cities.map((city) => (
    <ul key={city.Key}>
      <li>
        {city.EnglishName}, {city.AdministrativeArea.ID}, {city.Country.ID}
      </li>
      <button onClick={() => handleClick(city.EnglishName)}>Log City</button>
    </ul>
  ));
}
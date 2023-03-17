// It should take the array from the
//     App.js properly Using the proper array methods, map the array from the props
//     in the return field When mapping, each element should have a ul tag and at
//     least one li tag li tag(s) need to display the following: 
//     EnglishName of the object 
//     ID of the AdministrativeArea 
//     ID of the Country

export function CityItem({cities}) {
    return cities.map((city) => (
      // ul creates new line item, li creates bullet point
      <ul key={city.Key}>
        <li>{city.EnglishName}, {city.AdministrativeArea.ID}, {city.Country.ID}</li>
      </ul>
    ));
}
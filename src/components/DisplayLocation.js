// It should take the array from the
//     App.js properly Using the proper array methods, map the array from the props
//     in the return field When mapping, each element should have a ul tag and at
//     least one li tag li tag(s) need to display the following: 
//     EnglishName of the object 
//     ID of the AdministrativeArea 
//     ID of the Country

export function DisplayLocation(props) {
    return props.cityInformation.map((cityEntry) => (
      <ul key={cityEntry.Key}>
        <li>{cityEntry.EnglishName},&nbsp;</li>
        <li>{cityEntry.AdministrativeArea.ID},&nbsp;</li>
        <li>{cityEntry.Country.ID}</li>
      </ul>
    ));
}
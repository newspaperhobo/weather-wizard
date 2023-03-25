import React from "react";
/*
-Under the `src` folder, create a new folder named `components` if you have not already had one
-In the components folder, create a new folder named `shared`
-In the shared folder, create a new js file named InputField
-Move the label and the input elements to this component.
-Make the necessary changes so that it uses props to get the data from App.js
 */
export const InputField = ({ handleCityInput }) => {    
    <React.Fragment>
      <label htmlFor="city">City:</label>;
      {/*  Attach it to the input field with the proper attribute so that every time the user types something, this function is called */}
      <input type="text" id="city" onChange={handleCityInput} />;
    </React.Fragment>;
}


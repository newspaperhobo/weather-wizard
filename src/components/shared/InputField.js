import React from "react";

export const InputField = ({ handleCityInput }) => {    
    <React.Fragment>
      <label htmlFor="city">City:</label>;
      <input type="text" id="city" onChange={handleCityInput} />;
    </React.Fragment>;
}


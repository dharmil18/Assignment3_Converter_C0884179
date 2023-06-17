/*
Author: Dharmil Chhadva
ID: C0884179
Date: 16th June, 2023
*/

// function to convert from CAD to USD
function convertCadToUsd(cad) {
  const cadToUsdRate = 0.757; // Hard-coded exchange rate, taken from the internet
  return cad * cadToUsdRate;
}

// function to convert from USD to CAD
function convertUsdToCad(usd) {
  const usdToCadRate = 1.319; // Hard-coded exchange rate, taken from the internet
  return usd * usdToCadRate;
}

// function which validates user input and then displays the converted value
function convert() {
  let cadAmount = document.getElementById("cad").value;
  let usdAmount = document.getElementById("usd").value;

  // Input validation - if both the input have values an alert is shown
  if (cadAmount !== "" && usdAmount !== "") {
    alert("Please enter only one amount to convert!");
    return;
  }

  // Input validation - if cad input box has value and if the value is other than number, an alert is shown
  if (cadAmount !== "" && isNaN(cadAmount)) {
    alert("Please enter a valid amount in Canadian dollars!");
    return;
  }

  // Input validation - if usd input box has value and if the value is other than number, an alert is shown
  if (usdAmount !== "" && isNaN(usdAmount)) {
    alert("Please enter a valid amount in US dollars.");
    return;
  }

  if (cadAmount !== "") {
    // Calling function and passing the input value.
    // Also, setting the input box value to the converted amount
    document.getElementById("usd").value =
      convertCadToUsd(cadAmount).toFixed(3);
  } else if (usdAmount !== "") {
    // Calling function and passing the input value.
    // Also, setting the input box value to the converted amount
    document.getElementById("cad").value =
      convertUsdToCad(usdAmount).toFixed(3);
  }

  // Code to handle if both the inputs are empty
  else {
    alert("Please enter an amount to convert!");
    return;
  }
}

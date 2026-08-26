// Select the form element to listen for submission
const form = document.querySelector("form");

// const height = parseInt(document.querySelector('#height').value)
// this usecase will give empty

// Listen for the form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the page from refreshing on submit

  // Get height and weight values from inputs and convert to integers
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  // Select the results div to display output
  const results = document.querySelector("#results");

  // Validate height input
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give  a valid height ${height}`;
  // Validate weight input
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give  a valid weight ${weight}`;
  } else {
    // Calculate BMI: weight(kg) / height(m)^2, rounded to 2 decimal places
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display BMI result with weight category
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} - Underweight`;
    } else if (bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi} - Normal Range`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} - Overweight`;
    }
  }
});

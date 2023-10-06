const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>Your bmi is ${bmi} and </span>`;
    if(bmi>=18.6 && bmi <=24.9){
        results.innerHTML += `it is Normal`;
    }
    else if(bmi<18.5){
        results.innerHTML += `it is Underweight`;
    }
    else if(bmi>25){
        results.innerHTML += `it is Overweight`;
    }
  }
});
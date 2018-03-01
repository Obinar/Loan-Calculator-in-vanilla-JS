document.querySelector('#loan-form').addEventListener('submit', function (e) {
  // UI Variables
  const amount         = document.getElementById('amount');
  const interest       = document.getElementById('interest');
  const years          = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment   = document.getElementById('total-payment');
  const totalInterest  = document.getElementById('total-interest');

  const principal          = parseFloat(amount.value);
  const calculatedInterest = parseFloat(amount.value) / 100 / 12;
  const calculatedPayment  = parseFloat(years.value) * 12;




  e.preventDefault();
});
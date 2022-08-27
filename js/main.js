document.querySelector('#submit').addEventListener('click', calculate);

function calculate() {
  const musicIncome = document.querySelector('#music-income').value;
  const otherIncome = document.querySelector('#other-income').value;
  const deductions = document.querySelector('#deductions').value;

  const musicProfits = musicIncome - deductions;
  const musicTaxDue = musicProfits * 0.153;
  const totalIncome = musicIncome + otherIncome - deductions;

  let incomeTaxDue = 0;
  if (totalIncome > 12950) {
    incomeTaxDue += totalIncome / 12;
  }

  const totalTaxDue = incomeTaxDue + musicTaxDue;

  document.querySelector(
    '#results'
  ).innerHTML = `Music Profits: $${musicProfits.toFixed(2)}\n
                 FICA Tax: $${musicTaxDue.toFixed(2)}\n
                 Total Income Tax(Music and Other Incomes): $${incomeTaxDue.toFixed(
                   2
                 )}\n
                 Total Tax Liability: $${totalTaxDue.toFixed(2)}\n`;
}

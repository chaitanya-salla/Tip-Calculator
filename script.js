const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');


let noOfPeople = Number(numberOfPeople.innerText);


const calculateBill = () => {
  const billTotal = Number(billTotalInput.value);
  const tipPercentage = Number(tipInput.value) / 100;
  const tipAmount = billTotal * tipPercentage;
  const totalAmountPerson = (billTotal + tipAmount) / noOfPeople;
  perPersonTotal.innerText =  `₹${totalAmountPerson.toFixed(2)}`;
}

const increasePeople = () => {
  noOfPeople += 1;
  numberOfPeople.innerText = noOfPeople;
  calculateBill();
}

const decreasePeople = () => {
  if(noOfPeople <= 1) return;
  noOfPeople -= 1
  numberOfPeople.innerText = noOfPeople;
  calculateBill();
}
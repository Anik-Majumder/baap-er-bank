// deposit and total part

document.getElementById("btn-deposit").addEventListener("click", function () {
  // deposit calculation
  const dipositField = document.getElementById("diposit-input");
  const newDipositAmount = dipositField.value;

  const dipositElement = document.getElementById("deposit");
  const previousDipositTotal = dipositElement.innerText;
  const currentDipositTotal =
    parseFloat(newDipositAmount) + parseFloat(previousDipositTotal);
  dipositElement.innerText = currentDipositTotal;
  dipositField.value = "";

  //   total calculation after deposit

  const balanceTotalElement = document.getElementById("balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentBalanceTotal =
    previousBalanceTotal + parseFloat(newDipositAmount);
  balanceTotalElement.innerText = currentBalanceTotal;

  if (newDipositAmount < 1) {
    alert("please enter a valid number");
  }
});

// withdraw and total part

document.getElementById("btn-withdraw").addEventListener("click", function () {
  // withdraw calculation
  const withdrawField = document.getElementById("withdraw-input");
  const newWithdrawAmount = withdrawField.value;

  const withdrawElement = document.getElementById("withdraw");
  const previousWithdrawTotal = withdrawElement.innerText;
  const currentWithdrawTotal =
    parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawTotal);
  withdrawElement.innerText = currentWithdrawTotal;
  withdrawField.value = "";

  //   total calculation after withdraw

  const balanceTotalElement = document.getElementById("balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentBalanceTotal =
    previousBalanceTotal - parseFloat(newWithdrawAmount);
  balanceTotalElement.innerText = currentBalanceTotal;
  if (newWithdrawAmount > currentBalanceTotal) {
    alert("insufficiant balance");
  }
  if (newWithdrawAmount < 1) {
    alert("please enter a valid number");
  }
});

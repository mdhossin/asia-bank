// add event handelder deposit button
document.querySelector("#depositButton").addEventListener("click", () => {
  //   update deposit amount
  // get the deposit amount form input
  const depositAmountInput = document.querySelector("#depositAmount");
  const newDepositAmount = parseFloat(depositAmountInput.value);

  //   get current deposit value
  const currentDepositAmount = document.querySelector("#currentDeposit");
  const previousDepositAmount = parseFloat(currentDepositAmount.innerText);

  // sum of previus and new deposit amount
  const totalDepsitAmount = previousDepositAmount + newDepositAmount;

  //   put the total amount inside currentdepositamount
  currentDepositAmount.innerText = totalDepsitAmount;

  //   update the main account balance
  const mainBalance = document.querySelector("#mainBalance");
  const currentMainBalance = parseFloat(mainBalance.innerText);

  // declare new variable and add currentbalance + newdepositamount
  const newMainBalance = currentMainBalance + newDepositAmount;

  //   put the main balance inside the mainbalance
  mainBalance.innerText = newMainBalance;

  //   clear the input field
  depositAmountInput.value = "";
});

//  withdraw amount
document.querySelector("#withdrawButton").addEventListener("click", () => {
  // update withdraw amount
  // get the withdraw amount form input
  const withdrawAmountInput = document.querySelector("#withdrawAmount");
  const newWithdrawAmount = parseFloat(withdrawAmountInput.value);

  // get current withdraw balance
  const currentWithdrawAmount = document.querySelector("#currentWithdraw");
  const mainWithdrawAmount = parseFloat(currentWithdrawAmount.innerText);

  // put the main and new withdraw amount in a new variable
  const totalWithdrawAmount = mainWithdrawAmount + newWithdrawAmount;

  // put the total withdraw amount inside currentWithdraw amount
  currentWithdrawAmount.innerText = totalWithdrawAmount;

  // update the main balance
  const mainBalanceAmount = document.querySelector("#mainBalance");
  const withdrawMainAmount = parseFloat(mainBalanceAmount.innerText);

  // declare the new variable and increase the amount of mainbalance form new withdraw amount
  const newMainBalanceAmount = withdrawMainAmount - newWithdrawAmount;
  mainBalanceAmount.innerText = newMainBalanceAmount;

  // clear the withdraw input field
  withdrawAmountInput.value = "";
});

let newLine = "\r\n";
let balance = 1000;
let content =
  "1 - Check balance " +
  newLine +
  "2 - Deposit" +
  newLine +
  "3 - Withdraw" +
  newLine +
  "4 - Safe Quit" +
  newLine +
  "Please choose a value.";

let value = prompt(content);
switch (value) {
  case "1":
    alert("Your balance is : " + balance);
    break;
  case "2":
    let depositAmount = Number(prompt("Enter a value for deposit : "));
    if (depositAmount < balance) {
      // Process Successfull
      currentBalance = balance - depositAmount;
      balance = alert("Current balance : " + currentBalance);
    } else {
      // Process Failed
      alert(
        "Sorry we can't do this." +
          newLine +
          "Please enter a value smaller or equal than your balance."
      );
    }
    break;
    case "3":
        let withdraw = Number(prompt("Please enter a valid value."));
        currentBalance = balance + withdraw;
        alert("Current Balance : " + currentBalance);
        break;
        case "4":
            alert("Safe quit is successfull." + newLine + "Have a good one.");
            break;
            default:
                alert("Please enter a valid number between 1 to 4");
}

class BankAccount {
  constructor(holderName, balance) {
    this.holderName = holderName;
    this.balance = balance;
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount > 0) {
      this.balance = this.balance + amount;
      console.log(`${amount} deposited.`);
    } else {
      console.log("Deposit amount must be greater than 0.");
    }
  }

  // Method to withdraw money if there are  sufficient funds
  withdraw(amount) {
    if (!amount <= 0 && this.balance >= amount) {
      this.balance = this.balance - amount;
      console.log(`${amount} withdrawn.`);
    } else if (amount > 0 && this.balance < amount) {
      console.log("Insufficient funds.");
    } else {
      console.log("Transaction cannot be processed");
    }
  }

  // Method to display the current balance
  displayBalance() {
    console.log(`Current balance: ${this.balance}`);
  }
}

// Example:
const account = new BankAccount("Joe Smith", 1800); //Account Name: Joe Smith, Balance: 1800

account.deposit(500); //Deposit: 500, Balance = 2300
account.withdraw(200); //Withdraw 200,
account.displayBalance(); //Current Balance = 2100

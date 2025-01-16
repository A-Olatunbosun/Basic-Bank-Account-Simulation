# Bank Account Simulation

This project simulates a basic bank account with the ability to deposit money, withdraw money (with sufficient funds), and display the current balance.

## Features

- **Deposit**: Add money to the account.
- **Withdraw**: Withdraw money from the account (if there are sufficient funds).
- **Display Balance**: View the current balance of the account.

![code screenshot](./images/Basic%20bank%20account%20simulation.png)

## How the Bank Account Simulation Works

1.  **Depositing Money:**

    - The deposit() method: allows you to add money to the account. When you make a deposit, the account balance is updated, and a message confirms how much you deposited.

2.  **Withdrawing Money:**

    - The withdraw() method: allows you to withdraw money out of the account. If there’s enough money in the account, it will be deducted from the balance.
      If the amount you are tyring to withdraw is more than what you have in account, the system will show an insufficient funds message, so you can't go into a negative balance.

3.  **Viewing the Balance:**

    - The displayBalance() method: shows how much money is in the account at any time.

**_Examples_**
![Example 1](./images/sample%201.png)
![Example 2](./images/sample%202.png)
![Example 3](./images/sample%203.png)

_This project simulates a basic bank account that allows you to perform the essential operations: deposit money, withdraw money, and check how much money is in the account._

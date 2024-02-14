//Generated using AI ChatGPT- I was inspired to try and see if it would work in the terminal 
// Sorry this was not asked for - I asked ChatGPT to create a REPL for a bank account, I then added
// asked it to addthe additional features of the colours etc.
// It is the first thing I have ever got to work properly from ChatGPT and I was so excited. 

// to test - node src/banking-program.js

import readline from 'readline';


// Create a readline interface for reading input from the user (stdin) and writing output (stdout)
const rl = readline.createInterface({
  input: process.stdin,   // Read input from the standard input (keyboard)
  output: process.stdout, // Write output to the standard output (console)
});

// Define ANSI escape codes for terminal colors
const GREEN = '\x1b[32m'; // Green text
const RED = '\x1b[31m';   // Red text
const RESET_COLOR = '\x1b[0m'; // Reset text color

// Display a welcome message to the user
console.log('Welcome to the Bank of Lana.');

// Define a class for BankAccount with methods for deposit, withdraw, and printing the statement.
class BankAccount {
  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log('Invalid deposit amount.');
      return;
    }
    this.balance += amount;
    this.transactions.push({ date: new Date(), type: 'Deposit', amount, balance: this.balance });
    console.log(`Deposited $${amount}. New balance: ${GREEN}$${this.balance}${RESET_COLOR}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log('Invalid withdrawal amount.');
      return;
    }
    if (amount > this.balance) {
      console.log('Insufficient balance for withdrawal.');
      return;
    }
    this.balance -= amount;
    this.transactions.push({ date: new Date(), type: 'Withdrawal', amount, balance: this.balance });
    console.log(`Withdrawn $${amount}. New balance: ${RED}$${this.balance}${RESET_COLOR}`);
  }

  printStatement() {
    console.log(`Account Statement for ${this.accountHolder}`);
    console.log('----------------------------------');
    console.log('Date\t\tType\tAmount\tBalance');
    for (const transaction of this.transactions) {
      const amountColor = transaction.type === 'Deposit' ? GREEN : RED;
      console.log(`${transaction.date.toISOString()}\t${transaction.type}\t${amountColor}${transaction.amount}${RESET_COLOR}\t${amountColor}${transaction.balance}${RESET_COLOR}`);
    }
    console.log('----------------------------------');
  }
}

const account = new BankAccount('Lana');

// function to handle deposit
function handleDeposit() {
  rl.question('please enter the amount you would like to deposit: $', (amount) => {
    // Convert the input to a number
    const depositAmount = parseFloat(amount);
    
    if (isNaN(depositAmount)) {
      console.log('Invalid. Please enter numbers only.');
    } else {
      account.deposit(depositAmount);
    }

    // Return to the main menu
    showMainMenu();
  });
}

// Function to handle withdrawal
function handleWithdrawal() {
  rl.question('Enter the withdrawal amount: $', (amount) => {
    // Convert the input to a number
    const withdrawalAmount = parseFloat(amount);
    
    if (isNaN(withdrawalAmount)) {
      console.log('Invalid input. Please enter a valid amount.');
    } else {
      account.withdraw(withdrawalAmount);
    }

    // Return to the main menu
    showMainMenu();
  });
}

// Function to handle printing statement
function handleStatement() {
  account.printStatement();
  showMainMenu();
}

// function to display the main menu
function showMainMenu() {
  rl.question('Type "deposit" to deposit funds, "withdraw" to withdraw funds, "statement" to print a statement, or "exit" to exit: ', (answer) => {
    const lowerCaseAnswer = answer.toLowerCase();

    switch (lowerCaseAnswer) {
      case 'deposit':
        handleDeposit();
        break;

      case 'withdraw':
        handleWithdrawal();
        break;

      case 'statement':
        handleStatement();
        break;

      case 'exit':
        console.log('Thank you for using the Bank of Lana.');
        rl.close();
        break;

      default:
        console.log('Invalid command. Please try again.'); // Display an error message for invalid input
        showMainMenu(); // Show the main menu again
    }
  });
}

// Start by showing the main menu
showMainMenu();

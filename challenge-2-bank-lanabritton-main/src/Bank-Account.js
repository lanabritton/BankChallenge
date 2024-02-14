
import Transaction from "../src/Transaction.js"; 
class BankAccount {
    constructor(accountHolderName) {
      this.accountHolderName = accountHolderName;
      this.balance = 0;
      this.transactions = [];
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        const transaction = new Transaction(new Date(), amount, null, this.balance);
        this.transactions.push(transaction);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        const transaction = new Transaction(new Date(), null, amount, this.balance);
        this.transactions.push(transaction);
      }
    }
  
    getAccountHolderName() {
      return this.accountHolderName;
    }
  
    getBalance() {
      return this.balance;
    }
  
    getTransactions() {
      return [...this.transactions];
    }
    addTransaction(transaction) {
      this.transactions.push(transaction);
    }
  }
  
  export default BankAccount;
  
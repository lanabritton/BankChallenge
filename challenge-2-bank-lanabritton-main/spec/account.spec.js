import BankAccount from "../src/Bank-Account.js";
import TransactionsPrinter from "../src/Transactions-Printer.js";
import Transaction from "../src/Transaction.js";

let account; 

// User Story  - access account, easy for me to start using jasmine
describe("User Story 1: Accessing an Account", () => {
  beforeEach(() => {
    account = new BankAccount("Lana");
  });

  // Test 1 - display zero balance, another easy one for me to practice jasmine
  it("should display the initial balance as zero", () => {
    // Get the initial balance
    const initialBalance = account.getBalance();
    //  the initial balance is zero
    expect(initialBalance).toBe(0);

    console.log("Test 1: should display the initial balance as zero");
    console.log("Initial Balance:", initialBalance);
    console.log("------"); 
  });

  // Test 2 - get account holders name - easy ones so I can start learning jasmine 
  it("should access account holder's name as 'Lana'", () => {
    const expectedAccountHolderName = "Lana";
    const actualAccountHolderName = account.getAccountHolderName();
    expect(actualAccountHolderName).toBe(expectedAccountHolderName);

    console.log("Test 2: should access account holder's name as 'Lana'");
    console.log("Expected Account Holder Name:", expectedAccountHolderName);
    console.log("Actual Account Holder Name:", actualAccountHolderName);
    console.log("------"); 
  });
});

console.log("\n");

// User Story 2 -  depositing and withdrawing

describe("User Story 2: Depositing and Withdrawing Funds", () => {
  beforeEach(() => {
    account = new BankAccount("Lana");
  });

  // Test 3 - add Funds and   should update balance, I have done another test 3 using spyon which is 
  // below after test 7.
  it("should deposit funds into the account and update the balance", () => {
   
    const initialBalance = account.getBalance();
    
    //add money 
    const depositAmount = 1000;
    account.deposit(depositAmount);
    
    //  balance after deposit
    const balanceAfterDeposit = account.getBalance();
    
    // check that the balance has been updated correctly
    expect(balanceAfterDeposit).toBe(initialBalance + depositAmount);

    console.log("Test 3: should deposit funds into the account and update the balance");
    console.log("Initial Balance:", initialBalance);
    console.log("Deposit Amount:", depositAmount);
    console.log("Balance After Deposit:", balanceAfterDeposit);
    console.log("------"); 
  });

  // Test 4 -  withdrawing and balance update
  it("should withdraw funds from the account, update the balance, and track transactions", () => {
    const initialDeposit = 1000;
    account.deposit(initialDeposit);  
    const balanceAfterDeposit = account.getBalance();
    // withdraw an amount from the account, should leave 500 
    const withdrawAmount = 500;
    account.withdraw(withdrawAmount); 
    // balance after
    const balanceAfterWithdrawal = account.getBalance();
    // check transactions
    const transactions = account.getTransactions();
    //  check balance updates
    expect(balanceAfterWithdrawal).toBe(balanceAfterDeposit - withdrawAmount);
    
    expect(transactions.length).toBe(2);

    console.log("Test 4: should withdraw funds from the account, update the balance, and track transactions");
    console.log("date       || credit  || debit  || balance");
    for (const transaction of transactions) {
    const { date, credit, debit, balance } = transaction;
      console.log(`${date} || ${credit || ''} || ${debit || ''} || ${balance}`);
    }
    console.log("------"); 
  });

  // Test 5 - Edge case - withdraw funds with insufficient money 
  it("should not allow withdrawal if there are insufficient funds", () => {
    // Attempt to withdraw an amount greater than the initial balance
    const initialBalance = account.getBalance();
    const withdrawalAmount = initialBalance + 100;
    // attempt to withdra
    account.withdraw(withdrawalAmount);
    const balanceAfterWithdrawal = account.getBalance(); 
    //check that the balance remains unchanged
    expect(balanceAfterWithdrawal).toBe(initialBalance);

    console.log("Test 5: should not allow withdrawal if there are insufficient funds");
    console.log("Initial Balance:", initialBalance);
    console.log("Withdrawal Amount:", withdrawalAmount);
    console.log("Balance After Withdrawal:", balanceAfterWithdrawal);
    console.log("------"); 
  });

  // Test 6 - edge care - deposit negative amount 
  it("should not allow deposit of a negative amount", () => {
    const initialBalance = account.getBalance();
    const negativeDepositAmount = -100;
    account.deposit(negativeDepositAmount);
    const balanceAfterNegativeDeposit = account.getBalance();
    // check that the balance remains unchanged
    expect(balanceAfterNegativeDeposit).toBe(initialBalance);

    console.log("Test 6: should not allow deposit of a negative amount");
    console.log("Initial Balance:", initialBalance);
    console.log("Negative Deposit Amount:", negativeDepositAmount);
    console.log("Balance After Negative Deposit:", balanceAfterNegativeDeposit);
    console.log("------"); 
  });
});

// Test 7 - print statement with read me data provided
describe("Print Bank Statement", () => {
  it("should print the bank statement correctly", () => {
    //  sample transactions from the readme
    const transactions = [
      { date: '2012-01-10', credit: 1000, debit: null, balance: 1000 },
      { date: '2012-01-13', credit: 2000, debit: null, balance: 3000 },
      { date: '2012-01-14', credit: null, debit: 500, balance: 2500 },
    ];

  // check format is correct and working 
    console.log("Bank Statement:");
    for (const transaction of transactions) {
      const { date, credit, debit, balance } = transaction;
      console.log(`Date: ${date}, Credit: ${credit || ' '}, Debit: ${debit || ' '}, Balance: ${balance}`);
    }
  }); 

// tests using spyon and Mock - test 3 done differently with spyon 

//SPyon - https://jasmine.github.io/api/edge/Spy.html
//https://www.linkedin.com/advice/3/what-benefits-using-spyon-spyonproperty-methods
//https://jasmine.github.io/tutorials/spying_on_properties


  // Test 3 -  deposit Funds and update balance
  it("should deposit funds into the account and update the balance", () => {
    const initialBalance = account.getBalance();
    const depositAmount = 1000;

    // spy on the deposit method to track its invocation
    spyOn(account, "deposit").and.callThrough();

    // now deposit the amount
    account.deposit(depositAmount);

    // check if the deposit method was called with the correct deposit 
    expect(account.deposit).toHaveBeenCalledWith(depositAmount);

    // calculate the expected balance after deposit
    const expectedBalanceAfterDeposit = initialBalance + depositAmount;

    // check if the balance is updated correctly
    const actualBalanceAfterDeposit = account.getBalance();
    expect(actualBalanceAfterDeposit).toBe(expectedBalanceAfterDeposit);

    console.log("Test 3: should deposit funds into the account and update the balance");
    console.log("Initial Balance:", initialBalance);
    console.log("Deposit Amount:", depositAmount);
    console.log("Expected Balance After Deposit:", expectedBalanceAfterDeposit);
    console.log("Actual Balance After Deposit:", actualBalanceAfterDeposit);
    console.log("------");
  });

}); 

// create a new instance of BankAccount
beforeEach(() => {
  account = new BankAccount("Lana");
});

// Test 8 -  deposit funds, track deposit method, and update balance correctly
it("Test 8: should deposit funds, track deposit method, and update balance correctly", () => {
  const initialBalance = account.getBalance();
  const depositAmount = 1000;

  // spy on the deposit method 
  spyOn(account, "deposit").and.callThrough();
  account.deposit(depositAmount);

  // check if the deposit method was called with the correct args
  expect(account.deposit).toHaveBeenCalledWith(depositAmount);

  // calculate the balance after deposit
  const expectedBalanceAfterDeposit = initialBalance + depositAmount;

  // is the balance is updated correctly ??? 
  const actualBalanceAfterDeposit = account.getBalance();
  expect(actualBalanceAfterDeposit).toBe(expectedBalanceAfterDeposit);
});

// Test 9 - printing statement and should format and transactions correctly as per read me 
describe("User Story 3: Printing Bank Statement", () => {
  it("should print the bank statement correctly", () => {
    // new instance and add transactions
    const account = new BankAccount("Lana");
    const transactions = [
      { date: '2012-01-10', credit: 1000, debit: null, balance: 1000 },
      { date: '2012-01-13', credit: 2000, debit: null, balance: 3000 },
      { date: '2012-01-14', credit: null, debit: 500, balance: 2500 },
    ];

    transactions.forEach((transaction) => {
      account.addTransaction(new Transaction(transaction.date, transaction.credit, transaction.debit, transaction.balance));
    });
    spyOn(console, 'log');
    //print bankstatement
    TransactionsPrinter.printStatement(account.getTransactions());
    // check format is correct and working like readme 
    expect(console.log.calls.argsFor(0)[0]).toContain("date       || credit  || debit  || balance");
    transactions.forEach((transaction, index) => {
      const { date, credit, debit, balance } = transaction;
      const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      const expectedLine = `${formattedDate} || ${credit ? credit.toFixed(2) : ' '} || ${debit ? debit.toFixed(2) : ' '} || ${balance.toFixed(2)}`;
      expect(console.log.calls.argsFor(index + 1)[0]).toContain(expectedLine);
    });
  });
});
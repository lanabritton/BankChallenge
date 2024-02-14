class TransactionsPrinter {
  static printStatement(transactions) {
  
    console.log("date       || credit  || debit  || balance");

    // loop through each transaction in the transactions array
    for (const transaction of transactions) {
      const { date, credit, debit, balance } = transaction;

      // https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript
      const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      // format credit, debit, and balance with 2 decimal places
      // if  null display empty space -- https://www.w3schools.com/jsref/jsref_tofixed.asp
      const formattedCredit = credit ? credit.toFixed(2) : ' ';
      const formattedDebit = debit ? debit.toFixed(2) : ' ';
      const formattedBalance = balance.toFixed(2);

      //  each transaction line with formatted values
      console.log(`${formattedDate} || ${formattedCredit} || ${formattedDebit} || ${formattedBalance}`);
    }
  }
}
// data from readme 
const transactions = [
  { date: '2012-01-10', credit: 1000, debit: null, balance: 1000 },
  { date: '2012-01-13', credit: 2000, debit: null, balance: 3000 },
  { date: '2012-01-14', credit: null, debit: 500, balance: 2500 },
];

// statement using the TransactionsPrinter class
TransactionsPrinter.printStatement(transactions);

export default TransactionsPrinter;

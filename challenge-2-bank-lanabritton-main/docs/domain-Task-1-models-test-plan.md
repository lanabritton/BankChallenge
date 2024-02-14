<<<<<<< Updated upstream
=======
# Task 1

1. Explain the benefits of the software to the client - why they need it and how it will help them:
    - What are the benefits of the software to the client?
    - What are the benefits of the software to the end user?
    - What are the benefits of the software to the business?

#  What are the benefits of the software to the client?

**-Enhanced Financial Management:**

The software facilitates more efficient financial management for the client by simplifying tasks like deposits and withdrawals. It provides a well-organised view of their account history, making it easier to track financial transactions.

**-Real-time Accessibility:**

The REPL interface ensures that the client has instant access to their account information, allowing them to conveniently check their balance and transaction history whenever necessary.

**-Transparency:**

The software provides a transparent view of all financial transactions, enabling the client to monitor their financial activities over time. This transparency fosters trust and confidence in their financial management.

**-Error Reduction:**

Through automation of account updates and calculations, the software minimises the potential for manual errors in financial data management. This reduces the risk of discrepancies and inaccuracies in the client's financial records.

# Potential Future Benefits to the Client
**-Account Alerts and Notifications:**

The software can provide customisable alerts and notifications to keep the client informed about important account activities, such as low balances, large withdrawals, or upcoming bill payments.

**-Financial Planning Tools:**

The software can incorporate financial planning features such as budgeting tools, investment calculators, or goal tracking. This empowers the client to make informed financial decisions and work towards their financial objectives effectively.


**-Multi-Currency Support:**

If relevant, the software can support multiple currencies, allowing international clients to manage their accounts seamlessly, make currency conversions, and conduct foreign transactions efficiently.

--- 

# Benefits to the End User:

**-User-Friendly Interface:**

The REPL interface is designed to be user-friendly and easy to navigate, ensuring accessibility for users with varying levels of technical expertise. It promotes a positive user experience.

**-Account Security:**

The software will implement robust security measures, end-users can have confidence that their financial data is well-protected. This commitment to security ensures the confidentiality and integrity of their sensitive information.

**-Access to Account History:**

Users can quickly access their account history through the software, simplifying the process of reconciling transactions and aiding in future financial planning. This feature enhances financial control and decision-making.

# Potential Future Benefits to the End User:

**-Personalised Financial Recommendations:**

By leveraging artificial intelligence and machine learning, the software can offer tailored financial recommendations and insights based on the user's financial behaviour and goals.

**-Mobile Payment Integration:**

Integrating with mobile payment services like Apple Pay or Google Pay can provide end-users with convenient and secure mobile payment options, further enhancing their financial experience.

---

# Benefits to the Business:

**-Enhanced Customer Experience:**

Delivering a user-friendly and efficient software interface contributes to an improved overall customer experience. Higher levels of satisfaction and loyalty can be achieved, leading to increased client retention and positive word-of-mouth referrals.

**-Efficiency and Accuracy:**

The software automates numerous account management tasks, reducing the likelihood of human error. This automation enhances efficiency and accuracy, benefitting both clients and staff.

**-Data Analysis:**

Over time, the software accumulates valuable financial data that can be leveraged for in-depth analysis. This data can uncover trends, customer behaviour patterns, and valuable insights, supporting data-driven decision-making and business strategies.

**-Compliance and Reporting:**

The software assists the business in adhering to financial regulations by staying current with compliance requirements. It also streamlines the generation of necessary reports for auditing and tax purposes, ensuring regulatory compliance.

**-Business Growth Opportunities:**

The software can enable the business to identify growth opportunities by analysing customer data, helping to target specific market segments, and expanding product or service offerings accordingly.

**-Risk Mitigation:**

Through data analysis and trend identification, the software can help the business identify and mitigate potential financial risks, protecting its assets and reputation.

**-Resource Allocation Optimisation:**

By analysing transaction data and user behaviour, the software can help the business allocate resources more effectively, ensuring that staffing, inventory, and other resources are optimally deployed.

# Potential Future Benefits to the Business

**-Competitive Intelligence:**

The software can provide competitive intelligence by tracking industry trends, benchmarking against competitors, and identifying opportunities to outperform competitors in the market.

**-Enhanced Marketing Strategies:**

Leveraging user data, the software can support targeted marketing campaigns, helping the business reach the right audience with personalised offers and promotions.

**-Streamlined Operations:**

By automating various financial processes, the software can streamline internal operations, reducing administrative burdens and allowing staff to focus on more strategic tasks.

---

# User Stories 
User Story 1: Accessing an Account

- As a user, I would like to see the initial balance as zero when I start using the application.
- As a user, I would like to access my account holder's name as 'Lana'.

User Story 2: Depositing and Withdrawing Funds

- As a user, I would like to deposit funds into my account, and I expect the balance to be updated accordingly.
- As a user, I would like to withdraw funds from my account, have the balance updated, and track my transactions.
- As a user, I would like the system to prevent me from withdrawing if I have insufficient funds.
- As a user, I would like the system to prevent me from depositing a negative amount (edge case).

User Story 3: Printing Bank Statement

-As a user, I would like to print my bank statement, including transaction details such as dates, credits, debits, and balances.

-As a user, I want to be able to print a bank statement so that I can review my transaction history with clear and accurate formatting.

User Story 4: Using Spyon

-As a user, I want to be able to deposit funds into my account and ensure that the deposit method is accurately tracked, and my account balance is updated correctly. 

--- 
# Test Plan 

User Story 1: Accessing an Account

Test 1: Display Zero Balance
Test 2: Get Account Holder's Name

User Story 2: Depositing and Withdrawing Funds

Test 3: Deposit Funds and Update Balance (have added an extra test using spyon this is under test 7)
Test 4: Withdraw Funds, Update Balance, and Track Transactions
Test 5: Withdraw Funds with Insufficient Balance
Test 6: Deposit Negative Amount (Edge Case)

User Story 3: Printing Bank Statement

Test 7: Print Bank Statement

User Story 4: (Uses spyon)
Test 8: Deposit Funds, Track Deposit Method, and Update Balance Correctly

Test 9: An Addition to User Story 3 as Per the Instructions on Discord


--- 
# Domain Models 

Test 1 - 

|  Objects |     Properties      |      Messages           |     Outputs         |
| -------- | ------------------- | ------------------------| ------------------- |
| Account  | balance: Int
    | getBalance()            | Int
 (Balance)    |

Test 2 - 

|  Objects |     Properties      |        Messages              |     Outputs         |
| -------- | ------------------- | ----------------------------| ------------------- |
| User     | userID: String      | getAccountHolderName()       | String (Name)       |

Test 3 - 

|  Objects |     Properties      |         Messages          |     Outputs         |
| -------- | ------------------- | -------------------------| ------------------- |
| Account  | balance: Int
    | deposit(amount)           | Boolean (T)  |
|          |                   | getBalance()              | Int
 (Balance)    |

Test 4 - 

|  Objects |     Properties      |         Messages          |       Outputs       |
| -------- | ------------------- | -------------------------| ------------------- |
| Account  | balance: Int
    | deposit(amount)           | Boolean (T)  |
|          |                   | withdraw(amount)           | Boolean (T)
)  |
|          |                   | getBalance()               | Int
 (Balance)    |
|          |                   | getTransactions()          | Array (Transactions)|
|          |                   |                            |                    |
|Transaction| date: Date        |                           |                    |
|          | credit      |                           |                    |
|          | debit: Int
      |                           |                    |
|          | balance: Int
    |                           |                    |

Test 5 - 

|  Objects |     Properties      |         Messages          |     Outputs         |
| -------- | ------------------- | -------------------------| ------------------- |
| Account  | balance: Int          | withdraw(amount)          | Boolean (T)  |


Test 6 - 

|  Objects |     Properties      |         Messages          |     Outputs         |
| -------- | ------------------- | -------------------------| ------------------- |
| Account  | balance: Int          | deposit(amount)                 | Boolean (T)  |


Test 7 - 

|  Objects  |     Properties      |      Messages           |     Outputs              |
| --------- | ------------------- | ------------------------| ------------------       - |
| Statement |                      | print(transactions)     | Terminal in correct format     |
|           |                      |                          | (Transactions) |


Test 8 -

|  Objects        |     Properties         |      Messages                        |     Outputs                |
| --------------- | -----------------------| ------------------------------------| ---------------------------|
| User Account   |      Balance            |  deposit(amount)                    | Updated account balance   |
|                |                         |  (spyOn: track deposit method)      |                           |

---


>>>>>>> Stashed changes

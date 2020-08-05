# PtFundTransfer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.  

Peachtree Fund Transfer application.  


## Set up and run/test the app

Click on https://manoj23685.github.io/pt-fund-transfer/transfer to launch the deployed app.  
To set it up in local:
1.download the code from develop  
2.npm install  
3.npm start  
4.open http://localhost://4200  
  
To test:
npm run test  
or  
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Application structure

HomeComponent is the main landing container component.
It contains: 
1. TransactionList component, which displays the list of transactions. This is always shown.  
2. A router outlet that switches between 2 components: TransferMoney and Preview  

TransferMoney component is shown on page load, which accepts user inputs.
If all the validations are passed, the submit button leads to PreviewComponent.

On clicking Transfer on Preview, new transaction is added to the Transaction list. 

NgRx is being used for state management.
Main AppState along with 2 feature states TransferMoneyState and TransactionListState are being used. 



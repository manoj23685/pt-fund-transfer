import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from './transactions.interface';

@Pipe({
  name: 'filterTransactions'
})
export class FilterTransactionsPipe implements PipeTransform {
  transform(transactions: Transaction[], filterVal: string, sortBy, sortDir): Transaction[] {
    return transactions.filter(trans => 
           trans.merchant.toLowerCase().includes(filterVal.toLowerCase()))
           .sort((first, second) => {
              let a: Transaction, b: Transaction;
              if(sortDir === 'desc') {
                a = first;
                b = second;
              } else {
                b = first;
                a = second;
              }
              if (sortBy === 'transactionDate') {
                return (b.transactionDate as Date).getTime() - 
                       (a.transactionDate as Date).getTime()
              } 
              if (sortBy === 'amount') {
                return Number(b.amount) - Number(a.amount);
              }
              return a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase());
           });
  }
}

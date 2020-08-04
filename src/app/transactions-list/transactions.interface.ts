export interface Transaction {
  amount: string;
  categoryCode: string;
  merchant: string;
  merchantLogo?: string;
  transactionDate: number | Date;
  transactionType: TransactionTypes;
}

export enum TransactionTypes {
  cardPayment = 'Card Payment',
  onlineTransfer = 'Online Transfer',
  transaction = 'Transaction'
}
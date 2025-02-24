export interface ITransferToken {
  id: string;
  userId: number;
  transactionHash: string;
  status: string | null;
  type: string;
  countryCode: string;
  from: string;
  to: string;
  amount: number;
  tokenPrice: number;
  total: number;
  periodId: number;
}

export interface CategoryPropsDTO {
  name: string;
  icon: string;
}

export interface TransactionCardDTO {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}
export interface Props {
  data: TransactionCardDTO;
}

export interface TransactionProps {
  type: "positive" | "negative";
}

export interface DataListProps extends TransactionCardDTO {
  id: string;
}

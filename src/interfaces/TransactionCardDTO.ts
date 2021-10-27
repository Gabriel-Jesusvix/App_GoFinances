export interface CategoryPropsDTO {
  name: string;
  icon: string;
}

export interface TransactionCardDTO {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: CategoryPropsDTO;
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

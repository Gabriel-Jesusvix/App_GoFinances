export interface HiglightCardDTO {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

export interface TypeProps {
  type: "up" | "down" | "total";
}

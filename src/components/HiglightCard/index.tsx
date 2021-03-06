import React from "react";

import { HiglightCardDTO } from "../../interfaces/HiglightsCardDTO";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};
export function HiglightCard({
  type,
  title,
  amount,
  lastTransaction,
}: HiglightCardDTO) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>
          {lastTransaction || "Nenhuma transação cadastrada"}
        </LastTransaction>
      </Footer>
    </Container>
  );
}

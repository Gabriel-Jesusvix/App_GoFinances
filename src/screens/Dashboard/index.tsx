import React from "react";

import { HiglightCard } from "../../components/HiglightCard";
import { TransactionCard } from "../../components/TransactionCard";
import { DataListProps } from "../../interfaces/TransactionCardDTO";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreenting,
  UserName,
  UserWrapper,
  Icon,
  HiglightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from "./styles";

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Densevolvimento Mobile",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      id: "2",
      type: "negative",
      title: "BK",
      amount: "R$ 39,90",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "10/04/2020",
    },
    {
      id: "3",
      type: "negative",
      title: "Alugel",
      amount: "R$ 500,00",
      category: {
        name: "Vendas",
        icon: "shopping-bag",
      },
      date: "13/04/2020",
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/62946928?v=4",
              }}
            />
            <User>
              <UserGreenting>Olá</UserGreenting>
              <UserName>Gabriel J.</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HiglightCards>
        <HiglightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HiglightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 13 de abril"
        />
        <HiglightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HiglightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}

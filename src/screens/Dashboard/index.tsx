import React, { useState, useEffect, useCallback } from "react";

import { ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFocusEffect } from "@react-navigation/native";
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
  LoadContainer,
} from "./styles";

interface HiglightProps {
  amount: string;
  lastTransaction: string;
}
interface HiglightDTO {
  entries: HiglightProps;
  expensives: HiglightProps;
  total: HiglightProps;
}
export function Dashboard() {
  const { signOut, user } = useAuth();
  const [IsLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataListProps[]>([]);
  const [higlightData, sethiglightData] = useState<HiglightDTO>(
    {} as HiglightDTO
  );

  const theme = useTheme();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: "positive" | "negative"
  ) {
    const collectionFilttered = collection.filter(
      (transaction) => transaction.type === type
    );

    if (collectionFilttered.length === 0) return 0;
    const lastTransactions = new Date(
      Math.max.apply(
        Math,
        collectionFilttered.map((transaction) =>
          new Date(transaction.date).getTime()
        )
      )
    );

    return `${lastTransactions.getDate()} de ${lastTransactions.toLocaleString(
      "pt-BR",
      { month: "long" }
    )}`;
  }

  async function loadTransactions() {
    const dataKey = `@gofinances:transactions_user:${user.id}`;

    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));
        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );
    const total = entriesTotal - expensiveTotal;

    const lastTransactionEntries = getLastTransactionDate(
      transactions,
      "positive"
    );
    const lastTransactionExpensives = getLastTransactionDate(
      transactions,
      "negative"
    );
    const totalInterval =
      lastTransactionExpensives === 0
        ? "Não há transações"
        : `01 a ${lastTransactionExpensives}`;

    sethiglightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BT", {
          style: "currency",
          currency: "brl",
        }),
        lastTransaction:
          lastTransactionEntries === 0
            ? "Não há transações"
            : `Última entrada dia ${lastTransactionEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "brl",
        }),
        lastTransaction:
          lastTransactionExpensives === 0
            ? "Não há transações"
            : `Última saída dia ${lastTransactionExpensives} `,
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "brl",
        }),
        lastTransaction: totalInterval,
      },
    });

    setData(transactionsFormatted);
    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {IsLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: user.photo,
                  }}
                />
                <User>
                  <UserGreenting>Olá</UserGreenting>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>
              <LogoutButton onPress={signOut}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HiglightCards>
            <HiglightCard
              type="up"
              title="Entradas"
              amount={higlightData.entries.amount}
              lastTransaction={higlightData.entries.lastTransaction}
            />
            <HiglightCard
              type="down"
              title="Saídas"
              amount={higlightData.expensives.amount}
              lastTransaction={higlightData.expensives.lastTransaction}
            />
            <HiglightCard
              type="total"
              title="Total"
              amount={higlightData.total.amount}
              lastTransaction={higlightData.total.lastTransaction}
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
        </>
      )}
    </Container>
  );
}

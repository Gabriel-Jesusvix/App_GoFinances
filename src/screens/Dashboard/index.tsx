import React from "react";

import { HiglightCard } from "../../components/HiglightCard";
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
} from "./styles";

export function Dashboard() {
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

          <Icon name="power" />
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
    </Container>
  );
}

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
        <HiglightCard />
        <HiglightCard />
        <HiglightCard />
      </HiglightCards>
    </Container>
  );
}

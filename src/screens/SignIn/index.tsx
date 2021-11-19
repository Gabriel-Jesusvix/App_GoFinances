import React from "react";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvgIcon from "../../assets/IconApple.svg";
import GoogleSvgIcon from "../../assets/GoogleIcon.svg";
import LogoSvgIcon from "../../assets/logo.svg";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import { SingInSocialButton } from "../../components/SingInSocialButton";

export function SignIn() {
  return (
    <Container>
      <Header>
        <LogoSvgIcon width={RFValue(120)} height={RFValue(68)} />
        <TitleWrapper>
          <Title>Controle suas finanças de forma muito simples</Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"}uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SingInSocialButton title="Entrar com Google" svg={GoogleSvgIcon} />
          <SingInSocialButton title="Entrar com Apple" svg={AppleSvgIcon} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}

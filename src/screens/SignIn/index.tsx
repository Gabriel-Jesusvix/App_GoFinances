import React, { useState } from "react";
import { Alert } from "react-native";
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
import { useAuth } from "../../hooks/auth";

import { AuthContext } from "../../../AuthContext";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handlerSignInWithGoogle() {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Google");
    } finally {
      setIsLoading(false);
    }
  }
  async function handlerSignInWithApple() {
    try {
      setIsLoading(true);
      await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Apple");
    } finally {
      setIsLoading(false);
    }
  }

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
          <SingInSocialButton
            title="Entrar com Google"
            svg={GoogleSvgIcon}
            onPress={handlerSignInWithGoogle}
          />
          <SingInSocialButton
            title="Entrar com Apple"
            svg={AppleSvgIcon}
            onPress={handlerSignInWithApple}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}

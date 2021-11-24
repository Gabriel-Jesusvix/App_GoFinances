import React, { useState } from "react";
import { Alert, ActivityIndicator, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { useTheme } from "styled-components";
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

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();
  const theme = useTheme();

  async function handlerSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Google");
      setIsLoading(false);
    }
  }

  async function handlerSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Apple");
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
          {Platform.OS === "ios" && (
            <SingInSocialButton
              title="Entrar com Google"
              svg={GoogleSvgIcon}
              onPress={handlerSignInWithGoogle}
            />
          )}
          <SingInSocialButton
            title="Entrar com Apple"
            svg={AppleSvgIcon}
            onPress={handlerSignInWithApple}
          />
        </FooterWrapper>
        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  );
}

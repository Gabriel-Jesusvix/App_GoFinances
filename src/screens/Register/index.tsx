import React, { useState } from "react";
import { Modal } from "react-native";

import { useForm } from "react-hook-form";

import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { CategorySelect } from "../CategorySelect/";
import { InputForm } from "../../components/InputForm";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from "./styles";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const { control, handleSubmit } = useForm();

  function handlerTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handlerOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handlerCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm control={control} name="name" placeholder="Nome" />
          <InputForm control={control} name="amount" placeholder="Preço" />

          <TransactionsType>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handlerTransactionTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handlerTransactionTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionsType>

          <CategorySelectButton
            title={category.name}
            onPress={handlerOpenSelectCategoryModal}
          />
        </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handlerCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}

import React from "react";
import { List } from "../components";
import { ContainerPage, Title, DataHeader, DataTitle } from './styles'

const TodosPage = () => {
  return (
    <ContainerPage>
      <Title>Todos</Title>
      <DataHeader>
        <DataTitle>Título</DataTitle>
        <DataTitle>Completado</DataTitle>
      </DataHeader>
      <List resource='/todos'/>
    </ContainerPage>
  )
}

export default TodosPage;

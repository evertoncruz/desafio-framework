import React from "react";
import { List } from "../components";
import { ContainerPage, Title, DataHeader, DataTitle } from './styles'


const AlbumsPage = () => {
  return (
    <ContainerPage>
      <Title>Albums</Title>
      <DataHeader>
        <DataTitle>Título</DataTitle>
      </DataHeader>
      <List resource='/albums'/>
  </ContainerPage>
  )
}

export default AlbumsPage;
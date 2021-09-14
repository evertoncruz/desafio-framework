import React from "react";
import { List } from "../components";
import { ContainerPage, Title, DataHeader, DataPostsTitle } from "./styles";

const PostsPage = () => {
  return (
    <ContainerPage>
      <Title>Posts</Title>
      <DataHeader>
        <DataPostsTitle>Título</DataPostsTitle>
        <DataPostsTitle>Descrição</DataPostsTitle>
      </DataHeader>
      <List resource='/posts'/>
    </ContainerPage>
  )
}

export default PostsPage;
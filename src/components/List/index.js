import React, { useState, useEffect } from 'react';
import { BsCircle, BsCircleFill } from 'react-icons/bs'
import instance from '../../services/Api';
import { DataList, WrapTitlePostsDescription, TitleDescription, TitlePostsDescription, PostsDescription } from './styles';

const List = ({ resource }) => {
  const [datas, setDatas] = useState([]);
  
  useEffect( () => {
    async function getAll() {
      const res = await instance.get(resource);
      setDatas(res.data);
      console.log(res.data);
    }

    getAll();
}, [resource] );

  return (
    <ul>
      {datas.map( data => (
        <DataList key={data.id}>
          {resource !== '/posts' ?
           <TitleDescription>{data.title}</TitleDescription> :
           <WrapTitlePostsDescription><TitlePostsDescription>{data.title}</TitlePostsDescription></WrapTitlePostsDescription>}
 
          {resource === '/todos' && (data.completed ? <BsCircleFill color='#5f3473' /> : <BsCircle color='#5f3473' />)}

          {data?.body && <PostsDescription>{data.body}</PostsDescription>}          
        </DataList>
      ))}
    </ul>
  );
}

export default List;
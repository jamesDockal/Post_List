import React, { ReactElement } from 'react';
import { Post } from '../../types';

import { useNavigate } from 'react-router-dom'

import { Tr, Title, User, UserName, CompanyName } from './styles';

interface Props {
  post: Post
}

const Row: React.FC<Props> = ({ post }) => {
  const navigation = useNavigate()

  function navigate (): void {
    navigation(`/posts/${post.id}`)
  }

  return (
    <Tr
      onClick={navigate}
    >
              <Title>{post.title} </Title>
              <User>
                <UserName>{post.user?.name} </UserName>
                <CompanyName>{post.user?.company?.name}</CompanyName>
              </User>
            </Tr>
  )
};

export default Row;

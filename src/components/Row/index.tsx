import React from 'react';
import { Post } from '../../types';

import { Tr, Title, User, UserName, CompanyName } from './styles';

interface Props {
  post: Post
}

const Row: React.FC<Props> = ({ post }) => {
  return (
    <Tr>
              <Title>{post.title} </Title>
              <User>
                <UserName>{post.user?.name} </UserName>
                <CompanyName>{post.user?.company?.name}</CompanyName>
              </User>
            </Tr>
  )
};

export default Row;

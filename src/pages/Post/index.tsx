import React, { useEffect, useState } from 'react';

import { Post } from '../../types';
import api from '../../services/api';

import { useNavigate, useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import {
  Button,
  Container,
  Content,
  Header,
  LoadingContaier,
  Text,
  Title,
  User,
  UserCompany,
  UserName
} from './styles';

const PostPage: React.FC = ({}) => {
  const [post, setpost] = useState<Post>({} as Post);
  const [isLoading, setIsLoading] = useState(true);

  const { id }: any = useParams();

  const navigation = useNavigate();

  function navigate (): void {
    navigation('/');
  }

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then(({ data }) => {
        setpost(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      <Content>
        {isLoading
          ? (
          <LoadingContaier>
            <BallTriangle
              height="100"
              width="100"
              color="var(--purple-400)"
              ariaLabel="loading"
            />
          </LoadingContaier>
            )
          : (
          <>
            <Header>
              <Title>{post.title}</Title>
              <User>
                <UserName>{post.user.name}</UserName>
                <UserCompany>{post.user.company.name}</UserCompany>
              </User>
            </Header>
            <Text>{post.body}</Text>
            <Button onClick={navigate}>Home</Button>
          </>
            )}
      </Content>
    </Container>
  );
};

export default PostPage;

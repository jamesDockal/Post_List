import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { useNavigate, useParams } from 'react-router-dom'
import { Post } from '../../types';
import { Button, Container, Content, Header, LoadingContaier, Text, Title, User, UserCompany, UserName } from './styles';
import { BallTriangle } from 'react-loader-spinner';

const PostPage: React.FC = ({}) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [post, setpost] = useState<Post>({} as Post)
  const [isLoading, setIsLoading] = useState(true)

  const { id }: any = useParams()

  const navigation = useNavigate()

  function navigate (): void {
    navigation('/')
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    api.get(`/posts/${id}`).then(({ data }) => {
      setpost(data)
      setIsLoading(false)
    }).catch(() => setIsLoading(false))
  }, [])

  return (
 <Container>
   <Content>
   {isLoading
     ? <LoadingContaier>
             <BallTriangle
           height="100"
           width="100"
           color='var(--purple-400)'
           ariaLabel='loading'
         />
           </LoadingContaier>

     : <>
      <Header>
      <Title>{post.title}</Title>
      <User>
        <UserName>{post.user.name}</UserName>
        <UserCompany>{post.user.company.name}</UserCompany>
      </User>
      </Header>
      <Text>{post.body}</Text>
      <Button
            onClick={navigate}
          >Home</Button>
     </>

          }

   </Content>
 </Container>
  )
};

export default PostPage;

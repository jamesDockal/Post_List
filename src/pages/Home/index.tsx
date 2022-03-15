import React, { useEffect, useState } from 'react';
import Select from '../../components/Select';
import Table from '../../components/Table';
import api from '../../services/api';
import { Post, User } from '../../types';
import { BallTriangle } from 'react-loader-spinner'

import { Container, Title, FormContent, SelectContainer, Content, LoadingContaier } from './styles';

interface Option {
  label: string
  value: string | number
}

const Home: React.FC = ({}) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [usersOptions, setUsersOptions] = useState<Option[]>([])

  const [isLoading, setIsLoading] = useState(true)

  async function getPosts (): Promise<void> {
    const { data } = await api.get('/posts')
    setPosts(data)
  }

  async function getUsers (): Promise<void> {
    const { data } = await api.get('/users')

    const formatToOption: Option[] = data.map(({ name, id }: User) => ({
      label: name,
      value: id
    }))

    setUsersOptions(formatToOption)
  }

  async function onUserSelect (id: string | number | undefined): Promise<void> {
    if (id) {
      setIsLoading(true)
      const { data } = await api.get(`/users/${id}/posts`)
      setFilteredPosts(data)
      setIsLoading(false)
    } else {
      setFilteredPosts([])
    }
  }

  useEffect(() => {
    Promise.all([
      getPosts(), getUsers()
    ]).then(() => setIsLoading(false))
  }, [])

  return (
    <Container>
      <Content>
      <FormContent
      onSubmit={() => {}}
      >
        <Title>Posts List</Title>
      <SelectContainer>
      <Select
          name='customer'
          options={usersOptions}
          onChange={onUserSelect}
        />
      </SelectContainer>
      </FormContent>

         {isLoading
           ? <LoadingContaier>
             <BallTriangle
           height="100"
           width="100"
           color='var(--purple-400)'
           ariaLabel='loading'
         />
           </LoadingContaier>

           : <Table
            data={filteredPosts.length ? filteredPosts : posts}
          />

          }

      </Content>

          </Container>
  )
};

export default Home;

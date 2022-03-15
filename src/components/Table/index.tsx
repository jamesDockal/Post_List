import React, { useState } from 'react';

import { Post } from '../../types';

import Pagination from '../Pagination';
import Row from '../Row';

import { Container, Th, Tbody } from './styles';

interface Props {
  data: Post[]
}

const Table: React.FC<Props> = ({ data }) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Container>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>User</Th>
          </tr>
        </thead>

        <Tbody>
          {data.map((item, index) => {
            if (index < page * 10 && page * 10 - 10 <= index) {
              return <Row key={item.id} post={item} />;
            }
            return <></>;
          })}
        </Tbody>
      </Container>
      <Pagination
        totalCountOfRegisters={data.length}
        currentPage={page}
        onPageChange={setPage}
      />
    </>
  );
};

export default Table;

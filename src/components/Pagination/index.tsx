import React from 'react';

import PaginationButton from '../PaginationButton';

import { Container, Dots } from './styles';

interface Props {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1;

function generatePagesArray (from: number, to: number): number[] {
  return [...new Array(to - from)]
    .map((_, i) => i + from + 1)
    .filter((page) => page > 0);
}

const Pagination: React.FC<Props> = ({
  totalCountOfRegisters,
  currentPage = 1,
  registersPerPage = 10,
  onPageChange
}) => {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
        currentPage,
        Math.min(currentPage + siblingsCount, lastPage)
      )
      : [];

  return (
    <Container>
      <div>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationButton number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && <Dots>...</Dots>}
          </>
        )}

        {previousPages.map((page) => (
          <PaginationButton
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}

        <PaginationButton
          number={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPages.map((page) => (
          <PaginationButton
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <Dots>...</Dots>}
            <PaginationButton number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </div>
    </Container>
  );
};

export default Pagination;

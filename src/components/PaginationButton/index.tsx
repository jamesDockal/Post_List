import React from 'react';

import { Button } from './styles';

interface Props {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
}

const PaginationButton: React.FC<Props> = ({
  isCurrent = false,
  number,
  onPageChange
}) => {
  return isCurrent
    ? (
    <Button isActive={true}>{number}</Button>
      )
    : (
    <Button onClick={() => onPageChange(number)} isActive={false}>
      {number}
    </Button>
      );
};

export default PaginationButton;

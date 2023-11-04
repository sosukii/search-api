import { FC, useState, useEffect } from 'react';
import { Button } from '@shared/ui/Button';
import { Pagination as PaginationInterface } from '@shared/api/items';
import { generateArray } from '@shared/lib/generateArray';

interface Props {
  data: PaginationInterface;
  currentPage: number;
  setCurrentPage: (number: number) => void;
  onClickPrev?: () => void;
  onClickNext?: () => void;
}

export const Pagination: FC<Props> = ({
  data,
  currentPage,
  setCurrentPage,
  onClickPrev,
  onClickNext,
}) => {
  const [pagesArray, setPagesArray] = useState<number[]>([]);
  const [currentNumbers, setCurrentNumbers] = useState<number[]>([]);

  const MAX_DISPLAYED_NUMBER = 5;
  const { last_visible_page: lastPage } = data;

  useEffect(() => {
    const array = generateArray(lastPage);
    setPagesArray(array);
  }, [lastPage]);
  useEffect(() => {
    setCurrentNumbers(pagesArray.slice(0, MAX_DISPLAYED_NUMBER));
  }, [pagesArray]);

  const renderMiddlePartOfPagination = () => {
    return currentNumbers.map((pageNumber) => (
      <Button
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
        style={{ fontWeight: pageNumber === currentPage ? 'bold' : 'normal' }}
      >
        {' '}
        {pageNumber}
      </Button>
    ));
  };

  return (
    <div>
      <Button
        onClick={onClickPrev}
        disabled={currentPage === 1}
        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
      >
        ˂
      </Button>
      {renderMiddlePartOfPagination()} ...{' '}
      <Button onClick={() => setCurrentPage(lastPage)}>{lastPage}</Button>
      <Button
        onClick={onClickNext}
        disabled={currentPage === +lastPage}
        style={{ pointerEvents: currentPage === +lastPage ? 'none' : 'auto' }}
      >
        ˃
      </Button>
    </div>
  );
};

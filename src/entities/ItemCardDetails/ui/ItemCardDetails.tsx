import { FC } from 'react';

interface Props {
  status?: string;
  synopsis?: string;
  onCloseDetails?: () => void;
  id?: number;
}

export const ItemCardDetails: FC<Props> = ({
  synopsis = '',
  status = '',
  onCloseDetails,
  id = 0,
}) => {
  return (
    <div>
      <button onClick={onCloseDetails}>Close details</button>
      <h2>Item Details</h2>
      <p>Id: {id}</p>
      <p>Description: {synopsis}</p>
      <p>Status: {status}</p>
    </div>
  );
};

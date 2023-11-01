import { ReactNode, FC } from 'react';

interface Props {
  color?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<Props> = ({ color, onClick, children }) => {
  return (
    <button className={color} onClick={onClick}>
      {children}
    </button>
  );
};

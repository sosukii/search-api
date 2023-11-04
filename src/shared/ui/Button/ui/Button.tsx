import { ReactNode, FC, CSSProperties } from 'react';

interface Props {
  color?: string;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  disabled?: boolean;
}

export const Button: FC<Props> = ({ color, onClick, style, disabled, children }) => {
  return (
    <button className={color} onClick={onClick} style={style} disabled={disabled}>
      {children}
    </button>
  );
};

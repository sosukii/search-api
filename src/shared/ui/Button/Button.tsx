import { Component, ReactNode } from 'react';

interface Props {
  color?: string;
  children: ReactNode;
  onClick?: () => void;
}

export class Button extends Component<Props> {
  static defaultProps = {
    color: 'blue',
  };

  render() {
    const { color, children, onClick } = this.props;
    return (
      <button className={color} onClick={onClick}>
        {children}
      </button>
    );
  }
}

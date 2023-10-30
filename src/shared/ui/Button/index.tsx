import { Component, ReactNode } from 'react';

interface MyProps {
  color?: string;
  children: ReactNode;
}

export class Button extends Component<MyProps> {
  static defaultProps = {
    color: 'blue',
  };

  render() {
    const { color, children } = this.props;
    return <button className={color}>{children}</button>;
  }
}

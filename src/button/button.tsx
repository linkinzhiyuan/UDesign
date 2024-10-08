// 自定义button组件

import React from 'react';
import cls from 'classnames';

interface ButtonProps {
  size?: 'small' | 'default' | 'large';
  text?: string;
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, type = 'default', disabled = false, size = 'default', children }) => {
  return (
    <button className={cls(
      'udesign-button',
      `udesign-button--${type}`,
      `udesign-button--${size}`,
      disabled && 'udesign-button--disabled',
    )} onClick={onClick} type='button' disabled={disabled}>
      {children}
    </button>
  )
};

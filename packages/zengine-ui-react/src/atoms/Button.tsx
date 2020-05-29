import React, { ReactChildren, ReactChild } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  /** The Button type */
  type?: 'button' | 'reset' | 'submit'
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  theme?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  classes?: string
  disabled?: boolean
  children: ReactChildren | ReactChild
}

/**
 * A Button is one of the simplest components available, it will render an HTML `<button>` element.
 *
 * Use it to trigger an action from users.
 */
const Button: React.FC<ButtonProps> = (props) => {
  const theme = props.theme === 'secondary' ? 'outline-secondary' : props.theme;

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={classNames([`btn btn-${theme}`, props.classes])}
      disabled={props.disabled}
      aria-disabled={props.disabled === true ? true : undefined}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  theme: 'primary',
  type: 'button',
  classes: '',
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * A Button is one of the simplest components available, it will render an HTML `<button>` element.
 *
 * Use it to trigger an action from users.
 */
function Button(props) {
  return (
    <button
      type={ props.type }
      onClick={ props.onClick && props.onClick }
      className={ classNames([`btn btn-${ props.theme }`, props.classes]) }
      disabled={ props.disabled }
      aria-disabled={ props.disabled === true ? true : null }
    >
      { props.children }
    </button>
  );
}

Button.propTypes = {
  /**
   * Only text may be passed as a child to be used as the button label.
   **/
  children: PropTypes.string,
  /**
   * Disables the button.
   **/
  disabled: PropTypes.bool,
  /**
   * Click handler.
   **/
  onClick: PropTypes.func,
  /**
   * Button theme.
   **/
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
  ]),
  /**
   * HTML classes to be added as-is to the button.
   **/
  classes: PropTypes.string,
  /**
   * HTML button type.
   **/
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit'
  ]),
};

Button.defaultProps = {
  disabled: false,
  theme: 'primary',
  type: 'button',
  classes: '',
};

export default Button;

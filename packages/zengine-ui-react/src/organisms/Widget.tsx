import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

export interface WidgetProps {
  classes?: string
  header?: string | React.ReactElement
  body?: string | React.ReactElement
  footer?: string | React.ReactElement
}

/**
 * A Widget wraps arbitrary content in a box with header, body and footer sections.
 *
 * The content for each of these 3 sections may be either a string or a React component.
 */
const Widget: React.FC<WidgetProps> = (props) => {
  return (
    <div className={classNames(['card', props.classes])}>
      { !isEmpty(props.header) ? (
        <div className="card-header">
          { props.header}
        </div>
      ) : undefined}

      { !isEmpty(props.body) ? (
        <div className="card-body">
          { props.body }
        </div>
      ) : undefined}

      { !isEmpty(props.footer) ? (
        <div className="card-footer">
          { props.footer}
        </div>
      ) : undefined}
    </div>
  );
}

Widget.propTypes = {
  /**
   * Widget header.
   **/
  // header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  header: PropTypes.any,
  /**
   * Widget body.
   **/
  // body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  body: PropTypes.any,
  /**
   * Widget footer.
   **/
  // footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.any,
  /**
   * HTML classes to be added as-is to the HTML element.
   **/
  classes: PropTypes.string,
};

Widget.defaultProps = {
  classes: ''
};

export default Widget;

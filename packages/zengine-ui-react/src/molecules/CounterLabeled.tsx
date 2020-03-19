import React from 'react';
import classNames from 'classnames';

export interface CounterLabeledProps {
  count?: number | string
  label?: string
  suffix?: string
  classes?: string
}

/**
 * Counted Labeled displays a large numeric text with a smaller label below it.
 *
 * Use this to display summary info such as KPIs.
 */
const CounterLabeled: React.FC<CounterLabeledProps> = (props) => {
  // Intl.NumberFormat is safe: https://caniuse.com/#search=NumberFormat
  const formattedCount = typeof props.count === 'number' ? new Intl.NumberFormat('en-US', {
    style: 'decimal',
  }).format(props.count) : props.count;

  return (
    <article
      className={classNames(['mol-counter-labeled d-flex flex-column align-items-center', props.classes])}
      title={`${props.count} ${props.label}`}
    >
      <span>{formattedCount}{props.suffix}</span>
      <small>{props.label}</small>
    </article>
  );
}

CounterLabeled.defaultProps = {
  count: 0,
  label: 'Items',
  classes: '',
  suffix: '',
};

export default CounterLabeled;

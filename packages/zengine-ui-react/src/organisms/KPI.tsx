import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import CounterLabeled from '../molecules/CounterLabeled';

export interface KPIPropItem {
  count: number
  label: string
}

export interface KPIProps {
  items?: KPIPropItem[]
}

/**
 * KPI displays a group of Counter Labeled elements in containing box.
 */
function KPI (props: KPIProps): React.ReactElement {
  return (
    <section className="org-kpi d-flex flex-row justify-content-around border rounded pt-3 pb-3">
      { get(props, 'items', [] as KPIPropItem[]).map((item: KPIPropItem, index: number) => (
        <CounterLabeled { ...item } key={ index } classes="border-right flex-grow-1"/>
      )) }
    </section>
  );
}

KPI.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string,
  })),
};

KPI.defaultProps = {
  items: []
};

export default KPI;

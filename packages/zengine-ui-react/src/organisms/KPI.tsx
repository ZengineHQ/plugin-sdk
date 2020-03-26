import React from 'react';
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
const KPI: React.FC<KPIProps> = (props) => {
  return (
    <section className="org-kpi d-flex flex-row justify-content-around border rounded pt-3 pb-3">
      { get(props, 'items', [] as KPIPropItem[]).map((item: KPIPropItem, index: number) => (
        <CounterLabeled { ...item } key={ index } classes="border-right flex-grow-1"/>
      )) }
    </section>
  );
}

KPI.defaultProps = {
  items: []
};

export default KPI;

import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import CounterLabeled from '@zenginehq/zengine-ui-react/lib/molecules/CounterLabeled';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Molecules/CounterLabeled',
  component: CounterLabeled,
  parameters: {
    jest: ['CounterLabeled.test.js'],
  },
};

export const Default = () => <CounterLabeled />;

export const StringCount = () => <CounterLabeled count="Foo" />;

export const Suffix = () => <CounterLabeled count={ 85 } suffix="%" />;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <CounterLabeled
      count={ number('Count', 182) }
      label={ text('Label', 'Reviewed') }
      classes={ text('Classes', 'class-one') }
      suffix={ text('Suffix', '%') }
    />
  );
};

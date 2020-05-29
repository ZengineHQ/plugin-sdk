import React from 'react';
import { linkTo } from '@storybook/addon-links';

import Button from '../../src/atoms/Button';
import Image from '../../src/atoms/Image';
import KPI from '../../src/organisms/KPI';
import Label from '../../src/atoms/Label';
import PageTitle from '../../src/atoms/PageTitle';
import Select from '../../src/atoms/Select';
import useSyntaxHighlighter from '../../.storybook/useSyntaxHighlighter';

export default {
  title: 'Templates/ProgramManager',
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      disable: true,
    }
  }
};

export const Header = () => {
  const items = [
    {
      count: 1358,
      label: 'Submissions',
    },
    {
      count: 158,
      label: 'Ready for Review',
    },
    {
      count: 45,
      label: 'Reviewed',
    },
  ];

  const story = `
    import { Image, KPI, Label, PageTitle, Select } from '@zenginehq/zengine-ui-react';
    const items = dataFromService();

    <header className="tpl-program-console-header row">
      <div className="col-12">
        <Label for="program-selector">Select the program you wish to view:</Label>
        <Select
          id="program-selector"
          options={ ['Scholarship Program G', 'Other Program', 'Irrelevant Program'] }
          defaultValue="Scholarship Program G"
        />
      </div>

      <div className="col-md-6 col-sm-12 d-flex align-items-center">
        <Image src="sample-image.jpg" alt="Program Console" classes="atom-image-circle" height="88" />
        <PageTitle classes="ml-3">Program Console</PageTitle>
      </div>

      <div className="col-md-6 col-sm-12">
        <KPI items={items} />
      </div>
    </header>
  `;

  // @TODO we need a better way of displaying the source code, lets figure out why Docs addon isn't working.
  return (
    <>
      <header className="tpl-program-console-header row">
        <div className="col-12">
          <Label for="program-selector">Select the program you wish to view:</Label>
          <Select
            id="program-selector"
            options={ ['Scholarship Program G', 'Other Program', 'Irrelevant Program'] }
            defaultValue="Scholarship Program G"
          />
        </div>

        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <Image src="sample-image.jpg" alt="Program Console" classes="atom-image-circle" height="88" />
          <PageTitle classes="ml-3">Program Console</PageTitle>
        </div>

        <div className="col-md-6 col-sm-12">
          <KPI items={ items } />
        </div>
      </header>

      <hr className="mt-5 mb-3" />

      This template utilizes the following components:

      <ul>
        <li><Button theme="link" onClick={ linkTo('Atoms/Image') } classes="p-0">Image</Button></li>
        <li><Button theme="link" onClick={ linkTo('Atoms/PageTitle') } classes="p-0">PageTitle</Button></li>
        <li><Button theme="link" onClick={ linkTo('Organisms/KPI') } classes="p-0">KPI</Button></li>
      </ul>

      { useSyntaxHighlighter(story) }
    </>
  );
};

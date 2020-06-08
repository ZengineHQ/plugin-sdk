import React, { useRef } from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../../src/atoms/Button';
import SectionHeader from '../../src/atoms/SectionHeader';
import Table from '../../src/organisms/Table';
import Widget from '../../src/organisms/Widget';
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

const DemoData = ({ row }) => (
  <>
    <div className="text-dark">Form Data</div>
    <ul>
      <li>Form Name 01</li>
      <li>Form Name 02</li>
      <li>{ row[1] }</li>
      <li>{ row[2] }</li>
    </ul>
  </>
);

export const Portals = () => {
  // In order to attach the slideOut to the table we must grab a ref for the table and pass it along.
  const ref = useRef(null);

  // Data fetching callback we pass the MenuSlideOut, this is done like this so we lazy-load all data used.
  // It should return a component which displays the loaded data.
  const getData = row => <DemoData row={ row } />;

  const headers = ['Title', 'Something Else', 'Date', ''];
  const rows = [
    ['Title Information', 'Some Info', 'March 2020'],
    ['Other Title', 'Other Info', 'June 2020'],
    ['Third Title', 'Third Info', 'April 29 1992'],
  ];

// .map(row => {
//     const slideOut = (
//       <SlideOut
//         target={ ref }
//         title={ `Data: ${ row[0] }` }
//         titleIcon="database"
//         data={ () => getData(row) }
//       >
//         <Button theme="link">View Data</Button>
//       </SlideOut>
//     );
//     row.push(slideOut);
//     return row;
//   });

  const story = `
  import { Button, Table, Widget, SlideOut, SectionHeader } from '@zenginehq/zengine-ui-react';
  const headers = ['Title', 'Something Else', 'Date', ''];
  const rows = fetchDataFromAwesomeDatabase();

  <>
    <SectionHeader>Process: Scholarship Award</SectionHeader>

    <Widget
      body={ <Table headers={ headers } rows={ rows } classes="table-borderless table-hover"/> }
      footer={ <div className="text-center"><Button>Set Assignments</Button></div> }
    />
  </>
  `;

  return (
    <>
      <SectionHeader>Process: Scholarship Award</SectionHeader>

      <Widget
        body={ <Table headers={ headers } rows={ rows } classes="table-borderless table-hover" /> }
        footer={ (
          <div className="text-center">
            <Button onClick={ action('clicked footer button') }>Set Assignments</Button>
          </div>
        ) }
      />

      <hr className="mt-5 mb-3" />

      This template utilizes the following components:

      <ul>
        <li><Button theme="link" onClick={ linkTo('Components/Organisms/Widget') }
                    classes="p-0">Widget</Button></li>
        <li><Button theme="link" onClick={ linkTo('Components/Organisms/Table') }
                    classes="p-0">Table</Button></li>
        <li><Button theme="link" onClick={ linkTo('Components/Atoms/Button') }
                    classes="p-0">Button</Button></li>
        <li><Button theme="link" onClick={ linkTo('Components/Organisms/SlideOut') } classes="p-0">Menu
          Slide Out</Button></li>
      </ul>

      { useSyntaxHighlighter(story) }
    </>
  );
};

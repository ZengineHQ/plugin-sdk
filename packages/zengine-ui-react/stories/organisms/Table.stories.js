import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/atoms/Button';
import Table from '../../src/organisms/Table';
import {Checkbox} from "../../lib";

export default {
  title: 'Components/Organisms/Table',
  component: Table,
  parameters: {
    jest: ['Table.test.js'],
  },
};

export const Default = () => {
  return (
    <Table
      headers={ ['Name', 'Email ', 'Age'] }
      rows={ [
        ['John Smith', 'john@smith.com', '25'],
        ['Jane Doe', 'janedoe@hotmail.com', '25'],
        ['Highlander', 'one@therecanonlybe.com', 'Infinte']]
      }
    />
  );
};

export const ActionButton = () => {
  return (
    <Table
      headers={ ['Name', 'Email ', 'Age', 'Actions'] }
      rows={ [
        ['John Smith', 'john@smith.com', '25',
          <Button classes="btn-sm" onClick={ action('Button clicked for row 1') }>Do Something</Button>],
        ['Jane Doe', 'janedoe@hotmail.com', '25',
          <Button classes="btn-sm" onClick={ action('Button clicked for row 2') }>Do Something</Button>],
        ['Highlander', 'one@therecanonlybe.com', 'Infinte',
          <Button classes="btn-sm" onClick={ action('Button clicked for row 3') }>Do Something</Button>]]
      }
    />
  );
};

export const HoverNoBorder = () => {
  return (
    <>
      <p>This table has no borders and also adds a highlight effect to each row as you hover over it.</p>

      <Table
        classes="table-borderless table-hover"
        headers={ ['Name', 'Email ', 'Age'] }
        rows={ [
          ['John Smith', 'john@smith.com', '25'],
          ['Jane Doe', 'janedoe@hotmail.com', '25'],
          ['Highlander', 'one@therecanonlybe.com', 'Infinte']]
        }
      />

    </>
  );
};

export const MoreCustomClasses = () => {
  return (
    <Table
      classes="table-dark"
      headers={ ['Name', 'Email ', 'Age'] }
      rows={ [
        ['John Smith', 'john@smith.com', '25'],
        ['Jane Doe', 'janedoe@hotmail.com', '25'],
        ['Highlander', 'one@therecanonlybe.com', 'Infinte']]
      }
    />
  );
};
export const CheckboxInHeader = () => {
  return (
    <Table
      headers={ [<Checkbox/>, 'Email ', 'Age'] }
      rows={ [
        ['John Smith', 'john@smith.com', '25'],
        ['Jane Doe', 'janedoe@hotmail.com', '25'],
        ['Highlander', 'one@therecanonlybe.com', 'Infinite']]
      }
    />
  );
};
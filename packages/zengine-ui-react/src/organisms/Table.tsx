import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withForwardRef from '../util/withForwardRef';

export type TableRowCell = string | React.ReactElement;
export type TableRow = TableRowCell[];

export interface TableProps {
  innerRef?: any
  classes?: string
  headers?: string[]
  rows?: TableRow[]
}

/**
 * Table displays tabular data in, well, an HTML table.
 *
 * Accepts an array of table header names in the `headers` prop and an array of data to display, where each
 * item in the array represents a row and is itself an array where each item is a column in the row.
 *
 * You can add anything in columns, including React components!
 *
 * ```
 * <Table
 *  headers={['Name', 'Age', 'Actions']}
 *  rows={[
 *    ['John Smith', '99', <Button onClick={ ... }>Do Something</Button>],
 *    ['Jane Doe', '99', <Button onClick={ ... }>Do Something</Button>],
 *  ]} />.
 * ```
 */
function Table (props: TableProps): React.ReactElement {
  return (
    <div className="table-responsive" ref={ props.innerRef }>
      <table className={ classNames(['table', props.classes]) }>
        <thead>
          <tr>
            {(props?.headers ?? [] as string[]).map((name, index) => (
              <th key={ index }>{ name }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(props?.rows ?? [] as TableRow[]).map((row, index) => (
            <tr key={ index }>
              {(row ?? [] as TableRowCell[]).map((value, j) => (
                <td key={ j } className="align-middle">{ value }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  /**
   * Table headers.
   **/
  headers: PropTypes.arrayOf(PropTypes.any),
  /**
   * Table contents; an array of rows where each row is an array of columns containing either a string or a React component.
   **/
  // rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))),
  /**
   * HTML classes to be added as-is to the table.
   **/
  classes: PropTypes.string,
};

Table.defaultProps = {
  headers: [],
  rows: [],
  classes: ''
};

export { Table };

export default withForwardRef(Table);

import { Table as ReactTable, Row, ColumnDef } from "@tanstack/react-table";
import { Table as BTable } from 'react-bootstrap'
import { CSSProperties, ReactElement } from "react";
import { TableFooterProps } from "./TableFooter";
import { TableRow, TableRowProps } from "./TableRow";
import { TableHeader, TableHeaderProps } from "./TableHeader";

export type GridColumn<DataType> = ColumnDef<DataType> & {gridSize?: string;};

interface TableProps<DataType extends object> {
    className?: string;
    style?: CSSProperties;
    table: ReactTable<DataType>;
    /**
     * Overrides the theader element and it's content, allowing for custom logic
     */
    headerComponent?: (props: TableHeaderProps<DataType>) => ReactElement;
    /**
     * Overrides the tr element and it's content, allowing for custom logic
     */
    rowComponent?: (props: TableRowProps<DataType>) => ReactElement;
    /**
     * Used for expandable rows
     */
    subRowComponent?: (props: { row: Row<DataType> }) => ReactElement;
    /**
     * Adds a footer to the table.
     * @param props 
     * @returns 
     */
    footerComponent?: (props: TableFooterProps<DataType>) => ReactElement | null;
    grid?: boolean;
}


const Table = <DataType extends object>({
    className,
    style,
    table,
    headerComponent: Header = TableHeader,
    rowComponent: RowComponent = TableRow,
    subRowComponent,
    footerComponent: Footer,
    grid,
}: TableProps<DataType>): ReactElement => (
        <BTable style={{
            ...style,
            gridTemplateColumns: table.getAllColumns().map((column) =>
                (column.columnDef as GridColumn<DataType>).gridSize || 'auto').join(' ')
        }} className={`${className || ''} ${grid ? 'grid' : ''}`}>
            <Header table={table} />
            <tbody>
                {table.getRowModel().rows.map((row, index) => (<RowComponent row={row} subRowComponent={subRowComponent} index={index} key={row.id} />))}
            </tbody>
            {Footer && <Footer table={table} />}
        </BTable>
    );

export default Table;
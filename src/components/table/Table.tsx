import { Table as ReactTable } from "@tanstack/react-table";
import { Table as BTable } from 'react-bootstrap'
import { ReactElement } from "react";
import { TableFooterProps } from "./TableFooter";
import { TableRow, TableRowProps } from "./TableRow";
import { TableHeader, TableHeaderProps } from "./TableHeader";

interface TableProps<DataType extends object> {
    className?: string;
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
     * Adds a footer to the table.
     * @param props 
     * @returns 
     */
    footerComponent?: (props: TableFooterProps<DataType>) => ReactElement | null;
}


const Table = <DataType extends object>({
    className,
    table,
    headerComponent: Header = TableHeader,
    rowComponent: RowComponent = TableRow,
    footerComponent: Footer,
}: TableProps<DataType>): ReactElement => (
        <BTable className={`${className}`}>
            <Header table={table} />
            <tbody>
                {table.getRowModel().rows.map((row, index) => (<RowComponent row={row} index={index} key={row.id} />))}
            </tbody>
            {Footer && <Footer table={table} />}
        </BTable>
    );

export default Table;
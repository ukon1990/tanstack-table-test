import { flexRender, Row } from "@tanstack/react-table";
import { ReactElement } from "react";

export interface TableRowProps<DataType> {
    row: Row<DataType>;
    index?: number;
    /**
     * Used for expandable rows
     */
    subRowComponent?: (props: { row: Row<DataType> }) => ReactElement

}

export const TableRow = <DataType = any>({ row, subRowComponent: SubRowComponent }: TableRowProps<DataType>): ReactElement => (
    <>
        <tr key={row.id} className={SubRowComponent && row.getIsExpanded() ? 'is-expanded' : ''}>
            {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
            ))}
        </tr>
        {SubRowComponent && row.getIsExpanded() ? (
            <tr className="expanded-row"><td><SubRowComponent row={row} /></td></tr>
        ) : null
        }
    </>);
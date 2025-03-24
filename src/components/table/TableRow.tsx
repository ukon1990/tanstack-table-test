import { flexRender, Row } from "@tanstack/react-table";
import { ReactElement } from "react";

export interface TableRowProps<DataType> {
    row: Row<DataType>;
    index?: number;
}

export const TableRow = <DataType = any>({ row, }: TableRowProps<DataType>): ReactElement => (
    <tr key={row.id}>
        {row.getVisibleCells().map(cell => (
            <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
        ))}
    </tr>
);
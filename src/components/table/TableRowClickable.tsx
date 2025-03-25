import { flexRender, Row } from "@tanstack/react-table";
import { ReactElement } from "react";
import { TableRowProps } from "./TableRow";
import { useClickHandler } from "../../hooks";

interface Props<DataType> extends TableRowProps<DataType> {
    onRowClick: (row: Row<DataType>) => void;
}

/**
 * A table row, with support for click events, but still allowing for selecting text.
 */
export const TableClickableRow = <DataType = any>({ row, onRowClick }: Props<DataType>): ReactElement => {
    const {
        onMouseDown,
        onDoubleClick,
        onClick,
    } = useClickHandler(onRowClick);

    return (
        <tr
            key={row.id}
            onMouseDown={event => onMouseDown(event)}
            onDoubleClick={() => onDoubleClick()}
            onClick={event => onClick(event, row.original)}
            role="button"
        >
            {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
            ))}
        </tr>)
};
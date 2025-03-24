import { ColumnDef, flexRender, getCoreRowModel, useReactTable, Table as TanstackTable, Header } from "@tanstack/react-table";
import { ReactElement, JSXElementConstructor } from "react";

interface Props<DataType extends object> {
    className?: string;
    data: DataType[];
    columns: ColumnDef<DataType>[];
    footerComponent?: null | ReactElement<unknown, string | JSXElementConstructor<any>>;
}


const Table = <DataType extends object>({ data, columns, className, footerComponent: FooterComponent }: Props<DataType>): JSX.Element => {
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    return (
        <table className={`table ${className}`}>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder ? '' :
                                    flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            {FooterComponent && <FooterComponent table={table}/>}
        </table>
    )
};

export default Table;
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { ReactElement } from "react";

interface Props<DataType> {
    className?: string;
    data: DataType[];
    columns: ColumnDef<DataType>[];
    footerComponent?: (table?: ReturnType<typeof useReactTable>) => ReactElement;
}

const Table = <DataType = any>({data, columns, className, footerComponent: Footer}: Props<DataType>): ReactElement => {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    return (
    <table className={`table ${className}`}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
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
        {Footer && <Footer table={table}/>}
    </table>
)};

export default Table;
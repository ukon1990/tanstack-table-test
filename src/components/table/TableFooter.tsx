import { flexRender, Table } from "@tanstack/react-table";
import { ReactElement } from "react";

export interface TableFooterProps<DataType> {
  table: Table<DataType>;
}
export const TableFooter = <DataType = any>({ table }: TableFooterProps<DataType>): ReactElement => (
  <tfoot>
    {table?.getFooterGroups().map(footerGroup => (
      <tr key={footerGroup.id}>
        {footerGroup.headers.map(header => (
          <th key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(
                header.column.columnDef.footer,
                header.getContext()
              )}
          </th>
        ))}
      </tr>
    ))}
  </tfoot>);
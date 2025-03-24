import { flexRender, useReactTable } from "@tanstack/react-table";

interface Props {
    table?: ReturnType<typeof useReactTable>;
}
export const TableFooter = ({table}: Props) => table ? (
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
  </tfoot>) : null;
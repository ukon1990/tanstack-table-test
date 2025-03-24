import { flexRender, Table } from "@tanstack/react-table";
import { ReactElement } from "react";

export interface TableHeaderProps<DataType> {
    table: Table<DataType>;
}

export const TableHeader = <DataType = any>({ table }: TableHeaderProps<DataType>): ReactElement => (
    <thead>
        {table.getHeaderGroups().map(headerGroup => (
            <tr
                key={headerGroup.id}
            >
                {headerGroup.headers.map(header => (
                    <th key={header.id}>
                        {header.isPlaceholder ? '' : (
                            header.column.getCanSort() ?
                                (
                                    <button onClick={header.column.getToggleSortingHandler()}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {{
                                            asc: ' 🔼',
                                            desc: ' 🔽',
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </button>
                                ) : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                ))}
                    </th>
                ))}
            </tr>
        ))}
    </thead>
);
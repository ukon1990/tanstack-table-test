import { useMemo } from "react";
import { Person, personData } from "../../data/person.data";
import { getCoreRowModel, getExpandedRowModel, useReactTable } from "@tanstack/react-table";
import Table from "../../components/table";
import { GridColumn } from "../../components/table/Table";

export const ExpandableTablePage = () => {
    const data: Person[] = useMemo(() => personData, []);
    const columns: GridColumn<Person>[] = useMemo(
        () => [
            {
                accessorKey: 'name',
                header: 'Name',
            },
            {
                accessorKey: 'age',
                header: 'Age',
                gridSize: '2rem'
            },
            {
                accessorKey: 'address.street',
                header: 'Street adress',
            },
            {
                accessorKey: 'address.city',
                header: 'City',
                gridSize: '1fr'
            },
            {
                id: 'expander',
                header: () => null,
                cell: ({ row }) => {
                    return row.getCanExpand() ? (
                        <button
                            {...{
                                onClick: row.getToggleExpandedHandler(),
                                style: { cursor: 'pointer' },
                            }}
                            className="btn-primary"
                        >
                            {row.getIsExpanded() ? '-' : '+'}
                        </button>
                    ) : (
                        'x'
                    )
                },
                gridSize: '3rem'
            }
        ],
        []
    );

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getRowCanExpand: () => true,
    });

    return (
        <div>
            <h1>Table with expandable</h1>
            <Table
                table={table}
                subRowComponent={({ row }) => (<div>
                    This is an expanded row test
                </div>)}
                grid
            />
        </div>
    );
};
import { useMemo, useState } from "react";
import { Person, personData } from "../../data/person.data";
import { getCoreRowModel, getExpandedRowModel, useReactTable } from "@tanstack/react-table";
import Table, { getExpandableColumn } from "../../components/table";
import { GridColumn } from "../../components/table/Table";
import { FormCheck } from "react-bootstrap";

export const ExpandableTablePage = () => {
    const [useGrid, setUseGrid] = useState(false);
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
            getExpandableColumn(),
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
            <FormCheck>
                <FormCheck.Label>Turn grid on/off</FormCheck.Label>
                <FormCheck.Input type="checkbox" checked={useGrid} onChange={() => setUseGrid(!useGrid)} />
            </FormCheck>
            <Table
                table={table}
                subRowComponent={({ row }) => (<div>
                    This is an expanded row test - {row.id}
                </div>)}
                grid={useGrid}
            />
        </div>
    );
};
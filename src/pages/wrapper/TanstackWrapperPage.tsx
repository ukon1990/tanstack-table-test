import React, { ReactElement, useMemo } from 'react';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Person, personData } from '../../data/person.data';
import Table, { TablePagination } from '../../components/table';

const TanstackWrapperPage: React.FC = (): ReactElement => {
    const data: Person[] = useMemo(() => personData, []);
    const columns: ColumnDef<Person>[] = useMemo(
        () => [
            {
                accessorKey: 'name',
                header: 'Name'
            },
            {
                accessorKey: 'age',
                header: 'Age'
            },
            {
                accessorKey: 'address.street',
                header: 'Street adress'
            },
            {
                accessorKey: 'address.city',
                header: 'City'
            },
        ],
        []
    );
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });


    return (
        <div>
            <h1>Base table</h1>
            <Table table={table} footerComponent={TablePagination} />
        </div>
    );
};

export default TanstackWrapperPage;
import React, { ReactElement, useMemo, useState } from 'react';
import { ColumnDef, getCoreRowModel, getPaginationRowModel, PaginationState, useReactTable } from '@tanstack/react-table';
import { Person, personData } from '../../data/person.data';
import Table, { TablePagination } from '../../components/table';

// Based on: https://tanstack.com/table/latest/docs/framework/react/examples/pagination
const TableWithPaginationPage: React.FC = (): ReactElement => {
    const data: Person[] = useMemo(() => personData, []);
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

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
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    });


    return (
        <div>
            <h1>Table with pagination</h1>
            <Table table={table} footerComponent={TablePagination} />
        </div>
    );
};

export default TableWithPaginationPage;
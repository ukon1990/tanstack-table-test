import React, { ReactElement, useMemo, useState } from 'react';
import { ColumnDef, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';
import { Person, personData } from '../data/person.data';
import Table, { TableFooter } from '../components/table';

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
    getSortedRowModel: getSortedRowModel(),
});


  return (
    <div>
      <h1>Tanstack Iceberg</h1>
      <Table table={table} />
    </div>
  );
};

export default TanstackWrapperPage;
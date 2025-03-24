import React, { ReactElement, useMemo } from 'react';
import { useReactTable, ColumnDef, getCoreRowModel } from '@tanstack/react-table';
import { Person, personData } from '../data/person.data';

const TanstackPage: React.FC = (): ReactElement => {
  const data: Person[] = useMemo(() => personData, []);

  const columns: ColumnDef<Person>[] = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'age',
        header: 'Age',
      },
      {
        accessorKey: 'address.street',
        header: 'Street adress',
      },
    ],
    []
  );

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div>
      <h1>Tanstack Headless</h1>
      <table></table>
    </div>
  );
};

export default TanstackPage;
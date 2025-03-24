import React, { ReactElement, useMemo } from 'react';
import { ColumnDef, Table as TanStackTable } from '@tanstack/react-table';
import { Person, personData } from '../data/person.data';
import Table, { TableFooter } from '../components/table';

const TanstackWrapperPage: React.FC = (): ReactElement => {
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

  return (
    <div>
      <h1>Tanstack Iceberg</h1>
      <Table columns={columns} data={data} footerComponent={TableFooter} />
    </div>
  );
};

export default TanstackWrapperPage;
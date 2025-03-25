import { useCallback, useMemo, useState } from "react";
import { Person, personData } from "../../data/person.data";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import Table, { getArrowColumn } from "../../components/table";
import { GridColumn } from "../../components/table/Table";
import { useClickHandler } from "../../hooks";
import { Alert } from "react-bootstrap";

const ClickableRowPage = () => {
    const [selectedPerson, setSelectedPerson] = useState<Person | undefined>();

    const onClickEvent = useCallback((row: any) => {
        console.log('row', row)
        setSelectedPerson(row);
    }, [setSelectedPerson]);
    const {
        onMouseDown,
        onDoubleClick,
        onClick,
    } = useClickHandler(onClickEvent);

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
            getArrowColumn(row => onClickEvent(row)),
        ],
        [onClickEvent]
    );

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            <h1>Table with clickable rows</h1>
            {selectedPerson &&
                <Alert variant="warning">
                    {`Selected person: ${selectedPerson.name}`}
                </Alert>
            }
            <Table
                table={table}
                rowComponent={({ row }) => (
                    <tr
                        key={row.id}
                        onMouseDown={event => onMouseDown(event)}
                        onDoubleClick={() => onDoubleClick()}
                        onClick={event => onClick(event, row.original)}
                        role="button"
                    >
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>)}
                grid
            />
        </div>
    );
};
export default ClickableRowPage;

function useSate<T>(): [any, any] {
    throw new Error("Function not implemented.");
}

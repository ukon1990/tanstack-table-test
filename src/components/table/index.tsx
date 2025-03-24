import Table, { GridColumn } from './Table';
export * from './TableHeader';
export * from './TableRow';
export * from './TableFooter'
export * from './Pagination';

export const getExpandableColumn = <DataType = any>(): GridColumn<DataType> => ({
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
});

export default Table;
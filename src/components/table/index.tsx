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
                className="btn btn-secondary btn-sm"
            >
                {row.getIsExpanded() ? '-' : '+'}
            </button>
        ) : (
            'x'
        )
    },
    gridSize: '5rem'
});

export const getArrowColumn = <DataType = any>(): GridColumn<DataType> => ({
    id: 'expander',
    header: () => null,
    cell: ({ row }) => (<button
            {...{
                onClick: row.getToggleSelectedHandler(),
                style: { cursor: 'pointer' },
            }}
            className="btn btn-secondary btn-sm"
        >
            {'>'}
        </button>),
    gridSize: '5rem'
});

export default Table;
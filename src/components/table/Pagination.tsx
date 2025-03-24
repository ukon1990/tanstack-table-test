import { Pagination } from "react-bootstrap";
import { TableFooterProps } from "./TableFooter";
import { useMemo } from "react";

export const TablePagination = <DataType = any>({ table }: TableFooterProps<DataType>) => {
    const pages = useMemo(() => {
        return Array.from({ length: table.getPageCount() }, (_, i) => i + 1);
    }, [table]);

    return (
        <Pagination>
            <Pagination.First onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()} />
            <Pagination.Prev onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />

            {
                pages.map(page => (
                    <Pagination.Item
                        key={page}
                        active={table.getState().pagination.pageIndex + 1 === page}
                        onClick={() => table.setPageIndex(page - 1)}
                    >
                        {page}
                    </Pagination.Item>
                ))
            }
            <Pagination.Next onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
            <Pagination.Last onClick={() => table.lastPage()} disabled={!table.getCanNextPage()} />
        </Pagination>
    )
};
import { FC } from "react";
interface Column {
    header: string;
    accessor: string;
}
interface TableProps {
    data: Record<string, any>[] | null;
    columns: Column[] | null;
    onRowClick: (rowData: Record<string, any>) => void;
}
declare const Table: FC<TableProps>;
export default Table;

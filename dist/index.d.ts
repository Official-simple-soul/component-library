import React, { FC } from 'react';

interface ButtonProps {
    label: string;
    btn_color?: string;
    btn_text_color?: string;
    btn_text_size?: string;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

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

export { Button, Table };

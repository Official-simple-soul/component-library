import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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
    sort?: boolean;
}
interface TableProps {
    data: Record<string, any>[] | null;
    columns: Column[] | null;
}
declare function TableWidget({ data, columns }: TableProps): react_jsx_runtime.JSX.Element;

export { Button, TableWidget };

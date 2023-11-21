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

const Table: FC<TableProps> = ({ data, columns, onRowClick }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border-separate border-spacing-y-2'>
        <thead className='bg-[#eef1f5]'>
          <tr>
            {columns?.map((column, index) => (
              <th
                key={index}
                className={`${
                  index === 0
                    ? "rounded-l-md"
                    : index === columns.length - 1
                    ? "rounded-r-md"
                    : ""
                } px-6 py-3 text-left text-xs font-medium text-blue-ribbon-500 tracking-wider`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white '>
          {data?.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick(row)}
              className='hover:bg-blue-ribbon-100 transition-all ease-in-out duration-100 cursor-pointer'
            >
              {columns?.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`${
                    colIndex === 0
                      ? "rounded-l-md"
                      : colIndex === columns.length - 1
                      ? "rounded-r-md"
                      : ""
                  } px-6 py-4 whitespace-nowrap text-sm text-gray-900`}
                >
                  <span>{row[column.accessor]}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

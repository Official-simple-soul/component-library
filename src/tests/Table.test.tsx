import { render } from "@testing-library/react";
import { Table } from "../components";

export {};

test("renders learn react link", () => {
  render(<Table columns={columns} data={data} onRowClick={handleClick} />);
});

const columns = [
  { header: "Stage", accessor: "stage_id" },
  { header: "Task", accessor: "title" },
  { header: "Track", accessor: "track_id" },
  { header: "Due Date", accessor: "due_date" },
  { header: "Status", accessor: "status" },
  { header: "Points", accessor: "points" },
];

const data = [
  { header: "Stage", accessor: "stage_id" },
  { header: "Task", accessor: "title" },
  { header: "Track", accessor: "track_id" },
  { header: "Due Date", accessor: "due_date" },
  { header: "Status", accessor: "status" },
  { header: "Points", accessor: "points" },
];

const handleClick = (data: any) => {
  console.log(data);
};

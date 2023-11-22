import "./App.css";
import { Button, Table } from "./components";

const columns = [
  { header: "Stage", accessor: "stage_id" },
  { header: "Task", accessor: "title" },
  { header: "Track", accessor: "track_id" },
  { header: "Due Date", accessor: "due_date" },
  { header: "Status", accessor: "status" },
  { header: "Points", accessor: "points" },
];

const data = [
  {
    stage_id: "10",
    title: "Task",
    track_id: "10",
    due_date: "26/17/2202",
    status: "Completed",
    points: "10",
  },
  {
    stage_id: "4",
    title: "LMS",
    track_id: "4",
    due_date: "26/17/2202",
    status: "Completed",
    points: "100",
  },
];

const handleClick = (data: any) => {
  console.log(data);
};

function App() {
  return (
    <div className='App bg-red-600 h-96 w-96'>
      <h1>what</h1>
      <Table columns={columns} data={data} onRowClick={handleClick} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import WorkLogTable from "./components/WorkLogTable";
import CreateWorkLogForm from "./components/CreateWorkLogForm";
import { getWorkLogs } from "./api/worklog";

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    getWorkLogs().then(setData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Work Log</h1>

      <CreateWorkLogForm onCreated={fetchData} />

      <WorkLogTable data={data} />
    </div>
  );
}
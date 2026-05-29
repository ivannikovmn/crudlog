import { useEffect, useState } from "react";
import WorkLogTable from "./components/WorkLogTable";
import CreateWorkLogForm from "./components/CreateWorkLogForm";
import { deleteWorkLog, getWorkLogs } from "./api/worklog";


export default function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    getWorkLogs().then(setData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteWorkLog(id);
    fetchData(); // перезагрузка списка
  };

  return (
    <div className="page">
      <div className="container">
        <h1>CRUD Log</h1>

        <CreateWorkLogForm onCreated={fetchData} />

        <WorkLogTable data={data} onDelete={handleDelete} />
        
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import WorkLogTable from "./components/WorkLogTable";
import CreateWorkLogForm from "./components/CreateWorkLogForm";
import { deleteWorkLog, getWorkLogs } from "./api/worklog";


export default function App() {
  const [data, setData] = useState([]);

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]    
  );

  const [sortOrder, setSortOrder] = useState("desc");

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

  const filteredData = data
  .filter((item: any) => {
    if (!selectedDate) return true;

    return item.date.startsWith(selectedDate);
  })
  .sort((a: any, b: any) => {
    if (sortOrder === "desc") {
      return (
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
      );
    }

    return (
      new Date(a.date).getTime() -
      new Date(b.date).getTime()
    );
  });  

  return (
    <div className="page">
      <div className="container">
        <h1>CRUD Log</h1>

        <CreateWorkLogForm onCreated={fetchData} />

        <WorkLogTable
          data={filteredData}
          onDelete={handleDelete}
        />  

        <br/>      

        <div>
          <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">Newest first</option>
              <option value="asc">Oldest first</option>
            </select>
            
            <span>
              ---------------------------------------------------- 
            </span> 
            
          <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
        </div>   

      </div>
    </div>
  );
}
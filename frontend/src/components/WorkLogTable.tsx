import { useEffect, useState } from "react";
import { getWorkLogs } from "../api/worklog";
import type { WorkLog } from "../types/worklog";

export default function WorkLogTable() {
  const [data, setData] = useState<WorkLog[]>([]);

  useEffect(() => {
    getWorkLogs().then(setData);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Work Type</th>
          <th>Volume</th>
          <th>Unit</th>
          <th>Performer</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.workType}</td>
            <td>{item.volume}</td>
            <td>{item.unit}</td>
            <td>{item.performer}</td>
            <td>{new Date(item.date).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
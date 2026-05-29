import type { WorkLog } from "../types/worklog";

type Props = {
  data: WorkLog[];
  onDelete: (id: number) => void;
};

export default function WorkLogTable({ data, onDelete }: Props) {
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
          <th>Actions</th>
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

            <td>
              <button onClick={() => onDelete(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
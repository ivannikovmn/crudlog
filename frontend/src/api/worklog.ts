import axios from "axios";

export const getWorkLogs = async () => {
  const res = await axios.get("http://localhost:3000/work-log");
  return res.data;
};

export const deleteWorkLog = async (id: number) => {
  await axios.delete(`http://localhost:3000/work-log/${id}`);
};